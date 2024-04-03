import { memo, Fragment, useState, useMemo } from 'react'
import { useSidebarData, useNavigate } from 'dumi'

import './index.less'

const ComponentOverview = () => {
  const data = useSidebarData()
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const showData = useMemo(() => {
    return data
      .filter(item => item.title)
      .map(item => ({
        ...item,
        children: keyword
          ? item.children.filter(
              item =>
                item.title
                  .toLocaleLowerCase()
                  .indexOf(keyword.toLocaleLowerCase()) > -1,
            )
          : item.children,
      }))
      .filter(item => item.children.length)
  }, [keyword])

  return (
    <>
      <div className="overview-search-divider" />

      <div className="overview-search-wrapper">
        <input
          value={keyword}
          onChange={e => {
            window.scroll({
              top: 200,
              behavior: 'smooth',
            })
            setKeyword(e.target.value)
          }}
          className="overview-search"
          placeholder="搜索组件"
        />
      </div>

      <div className="overview-search-divider" />

      {showData.map(item => {
        return (
          <Fragment key={item.title}>
            <div className="overview-group-name">
              {item.title}{' '}
              <span className="overview-group-count">
                {item.children.length}
              </span>
            </div>

            <div className="overview-row">
              {item.children.map(subitem => {
                return (
                  <div key={subitem.title} className="overview-col">
                    <div
                      className="overview-card"
                      onClick={() => {
                        navigate(subitem.link)
                      }}>
                      {subitem.title}
                    </div>
                  </div>
                )
              })}
            </div>
          </Fragment>
        )
      })}
    </>
  )
}

export default memo(ComponentOverview)
