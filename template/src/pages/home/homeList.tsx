import ReInfoText from '../../common/texts/reInfoText'

interface IProps {
  items: any[]
  itemIdKey?: string
  itemTitleKey?: string
  activeItem: any
  onChangeActive: (item: any) => void
}

export default function HomeList({
  items = [],
  itemIdKey = 'id',
  itemTitleKey = 'title',
  activeItem = {},
  onChangeActive,
}: IProps) {
  function handleClick(item: any) {
    onChangeActive(item)
  }

  return (
    <div className="list-group max-h-300px pt-2 overflow-auto">
      {items.length === 0 ? (
        <ReInfoText text="No result" className="pt-3" />
      ) : (
        <>
          {items.map((item) => {
            const active = activeItem[itemIdKey] === item[itemIdKey]
            return (
              <button
                key={item[itemIdKey]}
                type="button"
                className={`list-group-item list-group-item-action ${
                  active ? 'active' : ''
                }`}
                onClick={() => handleClick(item)}
              >
                {item[itemTitleKey]}
              </button>
            )
          })}
        </>
      )}
    </div>
  )
}
