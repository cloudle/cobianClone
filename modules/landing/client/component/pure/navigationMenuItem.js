export default function({title, url, active}) {
	var activeClass = active ? ' active' : '';

	return <div class={'menu-item'+activeClass}>
		<div className="title">{title}</div>
	</div>
}