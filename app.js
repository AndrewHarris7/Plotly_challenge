d3.json("samples.json").then(function(data) {
    console.log(data.metadata)
    
    //Get id number for drop-down
    d3 
    .select("#selDataset")
    .selectAll("option")
    .data(data.names)
    .enter()
    .append("option")
    .text(function(name){
        return name
    })
    
    changeData()
    d3
    .select("#selDataset")
    .on("change", changeData)
    function changeData() {
        var nameValue = d3.select("#selDataset").property("value")
        // console.log(data.metadata)
        var filterMetaData = data.metadata.filter(meta => meta.id == nameValue);
        var filterSampleData = data.samples.filter(sample => sample.id == nameValue);
        
        // console.log(filterMetaData[0])
        // console.log(filterSampleData[0])
        
        //fill out table
      d3.select("#meta-id span").html(`${filterMetaData[0].id}`)
      d3.select("#meta-ethnicity span").html(`${filterMetaData[0].ethnicity}`)
      d3.select("#meta-gender span").html(`${filterMetaData[0].gender}`)
      d3.select("#meta-age span").html(`${filterMetaData[0].age}`)
      d3.select("#meta-location span").html(`${filterMetaData[0].location}`)
      d3.select("#meta-bbtype span").html(`${filterMetaData[0].bbtype}`)
      d3.select("#meta-wfreq span").html(`${filterMetaData[0].wfreq}`) 
      buildPlot(filterSampleData[0]) 
      buildBubblePlot(filterSampleData[0]) 
        }
      
    // // // //bar chart 
    
    