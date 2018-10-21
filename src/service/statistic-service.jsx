/*
* @Author: yangxiaoyu
* @Date:   2018-09-10 20:45:19
* @Last Modified by:   yangxiaoyu
* @Last Modified time: 2018-09-10 20:45:19
*/
import MUtil 	from 'util/mm.jsx';

const _mm   = new MUtil();

class Statistic{
	//首页数据统计
	getHomeCount(){
		return _mm.request({
			url  : '/manage/statistic/base_count.do'
		});
	}
}

export default Statistic;