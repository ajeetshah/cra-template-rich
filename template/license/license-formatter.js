const fs = require('fs')
const readline = require('readline')

const paths = {
  input: `${__dirname}/license.csv`,
  output: `${__dirname}/license-formatted.csv`,
}

const readInterface = readline.createInterface({
  input: fs.createReadStream(paths.input),
  crlfDelay: Infinity,
})

function createOrReplaceOutputFile() {
  fs.writeFile(paths.output, '', (error, file) => {
    if (error) throw error
  })
}

function appendOutputFile(line = '') {
  fs.appendFile(paths.output, `${line}`, (error, file) => {
    if (error) {
      throw error
    }
  })
}

function getNameVersion(library = '') {
  const index = library.lastIndexOf('@')
  if (index === -1) {
    return { name: library, version: '"version"' }
  }
  const name = library.substr(0, index) + '"'
  const version = library.substr(index + 1).replace(/\"/g, '')
  return { name, version }
}

function getLineDetails(line = '') {
  const data = line.split(',')
  const length = data.length

  const nameVersion = getNameVersion(data[0])
  const repo = data[length - 1]

  let license = ''
  for (let i = 1; i < length - 1; i++) {
    if (license) {
      license += ', ' + data[i]
    } else {
      license = data[i]
    }
  }

  return {
    nameVersion,
    license,
    repo,
  }
}

function format() {
  let prevRepo = ''
  let combinedVersions = ''
  createOrReplaceOutputFile()

  readInterface.on('line', line => {
    const {
      nameVersion: { name, version },
      license,
      repo,
    } = getLineDetails(line)

    if (repo === prevRepo) {
      if (combinedVersions) {
        combinedVersions += ` & ${version}`
      } else {
        combinedVersions = version
      }
    } else {
      combinedVersions = combinedVersions || version
      const formattedLine = `${name}, ${license}, ${repo}, ${combinedVersions}\n`
      appendOutputFile(formattedLine)
      combinedVersions = ''
    }
    prevRepo = repo
  })
}

format()
