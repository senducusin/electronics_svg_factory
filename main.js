(function(){
    var paper = Raphael("container", 1000, 1300); 
    
    // Sources
    createSource(500,100, "VDD")
    createSource(300,200, "VCC")

    // Resistors
    const resistorAttrVertical = {
        "orientation":"vertical",
        "value":200,
        "subValue":"R1",
        "label-position":0
    }
    createResistor(300,300,resistorAttrVertical)

    const resistorAttrHorizontal= {
        "orientation":"horizontal",
        "value":"1K",
        "subValue":"R2",
        "label-position":0
    }

    createResistor(100,200,resistorAttrHorizontal)


    // Capacitors
    const capacitorHorizontalAttr = {
        orientation:"horizontal",
        value:"0.22 μ",
        subValue: "C1",
        "label-position":0
    }

    createCapacitor(700,200, capacitorHorizontalAttr)


    const capacitorVerticalAttr = {
        orientation:"vertical",
        value:"0.22 μ",
        subValue: "C2",
        "label-position":0
    }

    createCapacitor(400,200, capacitorVerticalAttr)


    /* ====  ==== */

    function createResistor(x,y,attr){

        const position = attr["orientation"]
        const value = `${attr["value"]} Ω`
        const subValue = attr["subValue"]
        const labelPosition = attr["label-position"]

        const attribute = {"stroke-width":4}

        const originX = x
        const originY = y

        switch (position) {
            case "vertical":{
                const point1 = x+15
                const point2 = x-10
                
                paper.path(`M${originX} ${originY}L${originX} ${y+20}L${point1} ${y+25}L${point2} ${y+35}L${point1} ${y+45}L${point2} ${y+55}L${point1} ${y+65}L${point2} ${y+75}L${originX} ${y+80}L${originX} ${y+100}`)
                .attr(attribute)

                if (labelPosition == 0) {
                    paper.text(x-45,y+40,subValue)
                    paper.text(x-45,y+60,value)
                }else{
                    paper.text(x+45,y+40,subValue)
                    paper.text(x+45,y+60,value)
                }
            }
            break;

            case "horizontal":{
                const point1 = y+15
                const point2 = y-10
                paper.path(`M${originX} ${originY}L${x+20} ${originY}L${x+25} ${point1}L${x+35} ${point2}L${x+45} ${point1}L${x+55} ${point2}L${x+65} ${point1} L${x+75} ${point2} L${x+80} ${originY}L${x+100} ${originY}`)
                .attr(attribute)

                if (labelPosition == 0) {
                    paper.text(x+45,y-45,subValue)
                    paper.text(x+45,y-25,value)
                }else{
                    paper.text(x+45,y+30,subValue)
                    paper.text(x+45,y+50,value)
                }
            }
            break;
        }
    }

    function createSource(x,y, value){
        const attributes = {
            fill: "#000"
        }
        const strokeWidth = 3

        paper.text(x,y-15,value)
        paper.rect(x,y,strokeWidth,30).attr(attributes)
        paper.rect(x-19,y,40,strokeWidth).attr(attributes)
    }


    // Need to add labels
    function createCapacitor(x,y, attr){
        const attributes = {
            fill: "#000"
        }

        const orientation = attr["orientation"]

        if(orientation == "horizontal"){
            paper.rect(x+15,y+13,30,3).attr(attributes)
            paper.rect(x,y,3,30).attr(attributes)
            
            paper.rect(x+15,y,3,30).attr(attributes)
            paper.rect(x-30,y+13,30,3).attr(attributes)
        }else{
            paper.rect(x+13,y+15,3,30).attr(attributes)
            paper.rect(x,y,30,3).attr(attributes)

            paper.rect(x,y+15,30,3).attr(attributes)
            paper.rect(x+13,y-30,3,30).attr(attributes)
        }

    }


})()