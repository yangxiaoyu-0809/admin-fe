import React    	from 'react';
import { Link }  	from 'react-router-dom';

import PageTitle 	from 'component/page-title/index.jsx';
import Pagination 	from 'util/pagination/index.jsx';

class ProductList extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div id="page-wrapper">
				<PageTitle title="商品列表"/>
				<div className="row">
					<div className="col-md-12">
						<table className="table table-striped table-bordered">
							<thead>
								<tr>
									<th>ID</th>
									<th>ID</th>
									<th>ID</th>
									<th>ID</th>
									<th>ID</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>123</td>
									<td>123</td>
									<td>123</td>
									<td>123</td>
									<td>123</td>
								</tr>
							</tbody>
						</table>
					</div>
					<Pagination current={11} total={200} onChange={(pageNum) => {console.log(pageNum)}}/>
				</div>
			</div>
		);
	}
}

export default ProductList;