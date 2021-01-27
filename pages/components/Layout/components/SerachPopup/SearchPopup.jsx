import React from 'react'

export default function SearchPopup() {
    return (
    <div className="search-popup">
		<button className="close-search style-two"><span className="flaticon-multiply"></span></button>
		<button className="close-search"><span className="flaticon-up-arrow-1"></span></button>
		<form method="post" action="https://expert-themes.com/html/globex/blog.html">
			<div className="form-group">
				<input type="search" name="search-field" defaultValue="" placeholder="Search Here" />
				<button type="submit"><i className="fa fa-search"></i></button>
			</div>
		</form>
	</div>
    )
}
