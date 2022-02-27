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
        ],
        lastVerificationAt: "Date",
        isVerified: "Verified"

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
        ],
        lastVerificationAt: "Date",
        isVerified: "Pending"
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
        ],
        lastVerificationAt: "Date",
        isVerified: "Failed"
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
        ],
        lastVerificationAt: "Date",
        isVerified: "Verified"
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
        ],
        lastVerificationAt: "Date",
        isVerified: "Verified"
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
        ],
        lastVerificationAt: "Date",
        isVerified: "Verified"
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
        ],
        lastVerificationAt: "Date",
        isVerified: "Verified"
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
        ],
        lastVerificationAt: "Date",
        isVerified: "Verified"
    }
]


window.onload = (event) => {
    fetch("http://localhost:8080/getUserDocs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            docList = data.allDocs;
            listofdoc2();
        })
}

function listofdoc2() {
    let innerHTM = ''
    for (let i = 0; i < docList.length; i++) {
        let tt = ''
        if (docList[i].isVerified === 'Verified') {
            tt = 'green'
        } else if (docList[i].isVerified === 'Pending') {
            tt = 'rgb(255, 128, 0)'
        } else {
            tt = 'rgb(255, 0, 0)'
        }
        let temp = `
        <div class="cardlist" style="display: flex;justify-content:space-between;flex-direction: row;padding: 0px 20px;">
            <div class="namep" style="flex: 1;">
                ${docList[i].docPurpose}
            </div>
            <div class="namep" style="flex: 1;">
                ${docList[i].lastVerificationAt}
            </div>
            <div class="namep" style="color: ${tt};flex: 1;">
                ${docList[i].isVerified}
            </div>
        </div>`
        innerHTM += temp
    }
    let temp1 = document.getElementById('myStatusAll')
    temp1.innerHTML = (innerHTM)
}