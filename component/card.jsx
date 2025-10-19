export function Card({ item, handleClick }) {
  return (
    <li className={`job_item ${item.featured && "border"}`}>
      <div className="flex item_content">
        <img
          src={item.logo}
          alt={item.company}
          loading="lazy"
          className="logo"
        />
        <div className="content">
          <div className="company">
            <h1>{item.company}</h1>
            {item.new && <span className="new">NEW!</span>}
            {item.featured && <span className="featured new">FEATURED</span>}
          </div>
          <h2>{item.position}</h2>
          <div className="company_info">
            <p>{item.postedAt}</p>
            <p>{`. ${item.contract}`}</p>
            <p>{`.${item.location}`}</p>
          </div>
        </div>
      </div>
      <div className="buttons-box">
        <button onClick={() => handleClick(item.role)}>{item.role}</button>
        <button onClick={() => handleClick(item.level)}>{item.level}</button>
        {item.languages.map((lang) => {
          return (
            <button key={lang} onClick={() => handleClick(lang)}>
              {lang}
            </button>
          );
        })}
        {item.tools.map((tool) => {
          return (
            <button key={tool} onClick={() => handleClick(tool)}>
              {tool}
            </button>
          );
        })}
      </div>
    </li>
  );
}
