 

 
export function  getData() {
	fetch("https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/new-intraday.json")
	.then((response) => response.json())
	.then((responseJson) => {
		console.log(responseJson);
		 
	})
	
}


const dataSet = {
    label: ' ',
    backgroundColor: [
      'rgba(0, 204, 0, 0.5)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    borderColor: [
      'rgba(6, 95, 211, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    borderWidth: 1,
    fill: true,
  }

export function dataSetTemp(){
	return dataSet;
}