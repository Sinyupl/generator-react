require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


//获取图片相关数组
var imageDatas = require('../data/imageDatas.json');

//将图片名字转成URL
var genImageURL = function(imageDatasArr){
	for(var i=0; i<imageDatasArr.length; i++){
		var singleImageData = imageDatasArr[i];
		
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
}

imageDatas = genImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
       <section className="stage">
       		<section className="img-sec">
       		</section>
       		<nav className="controller-nav">
       		</nav>
       </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
