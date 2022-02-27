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
                fieldType: "text"
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
    let innerHTM = ''
    for (let i = 0; i < docList.length; i++) {
        let temp = `<div onclick="typedoc(${i})" class="cardlist part2">
                        <div class="one">${docList[i].docPurpose}</div>
                        <div class="two">Apply Now</div>
                    </div>`
        innerHTM += temp
    }
    let temp1 = document.getElementById('docListId')
    temp1.innerHTML = (innerHTM)
}

function typedoc(index) {
    localStorage.setItem("userFormIndex", index);
    window.location.href = "./userServiceList.html";
}