let docList = [{
        docPurpose: 'Rashan Card',
        fieldsToVerify: [{
                fieldName: "Name",
                fieldType: "text"
            },
            {
                fieldName: "Age",
                fieldType: "number"
            },
            {
                fieldName: "Date of birth",
                fieldType: "text"
            }
        ]
    },
    {
        docPurpose: 'Adhar Card',
        fieldsToVerify: [{
                fieldName: "Name",
                fieldType: "text"
            },
            {
                fieldName: "Age",
                fieldType: "number"
            },
            {
                fieldName: "Date of birth",
                fieldType: "date"
            },
            {
                fieldName: "Address",
                fieldType: "text"
            },
            {
                fieldName: "Adhar Number",
                fieldType: "number"
            }
        ]
    }, {
        docPurpose: 'Pan Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }
        ]
    },
    {
        docPurpose: 'Lan Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }
        ]
    }, {
        docPurpose: 'Rashan Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }
        ]
    },
    {
        docPurpose: 'Adhar Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }
        ]
    }, {
        docPurpose: 'Pan Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }
        ]
    },
    {
        docPurpose: 'Lan Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }, {
                fieldName: "checker",
                fieldType: "file"
            }
        ]
    }
]


window.onload = (event) => {
    fetch("http://localhost:8080/getRules", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            docList = data.rules;
            listofdoc();
        })
}


function listofdoc() {
    console.log(localStorage.getItem('userFormIndex'))
    let innerHTM = ''
    document.querySelector('.head').innerHTML = docList[localStorage.getItem('userFormIndex')].docPurpose

    let alpha = docList[localStorage.getItem('userFormIndex')].fieldsToVerify
    console.log(alpha)
    for (let i = 0; i < alpha.length; i++) {
        let temp = `<div class="cardlist part2 ${alpha[i].fieldType==='file'?'inputupdate':''}">
        <div>
                        ${alpha[i].fieldName} :</div>
                        <div>
                        <input ${alpha[i].fieldType==='file'?"class='custom-file-input' id='myfile'":''} type="${alpha[i].fieldType}">
                        </div>
                    </div>`
        innerHTM += temp
    }
    let temp = `<div class="cardlist inputupdate">
    <div>Upload Document :
        <input class="" type="file"></div>

    <div style="border: 1px rgb(168, 168, 168) solid;" onclick="" class="cardlist">
        Submit
    </div>
</div>`
    innerHTM += temp
    let temp1 = document.getElementById('docListformId')
    temp1.innerHTML = (innerHTM)
}

function typedoc2() {
    console.log("hello")
    let formData = new FormData();
    formData.append("docPurpose", docList[localStorage.getItem('userFormIndex')].docPurpose);
    formData.append("ruleId", docList[localStorage.getItem('userFormIndex')]._id);
    formData.append("doc", document.getElementById("myfile").files[0]);
    fetch("http://localhost:8080/uploadDocument", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            body: formData
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            // window.location.href = 'userServiceListOutput.html';
        })
}