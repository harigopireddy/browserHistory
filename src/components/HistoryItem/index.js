import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onRemoveHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="hi-con-1">
      <div className="hi-con-2">
        <p className="history-time">{timeAccessed}</p>
        <div className="hi-con-3">
          <img
            src={logoUrl}
            alt="domain logo"
            className="history-domain-logo"
          />
          <div className="hi-con-4">
            <p className="history-title">{title}</p>
            <p className="history-domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="history-del-btn"
        onClick={onRemoveHistory}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="history-del-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
