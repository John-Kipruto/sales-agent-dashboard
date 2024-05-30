const data = [
    {
      "id": "1",
      "invoiceId": "1",
      "schoolId": "1",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "invalid",
      "amount": "8900"
    },
    {
      "id": "2",
      "invoiceId": "2",
      "schoolId": "1",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "3",
      "invoiceId": "3",
      "schoolId": "1",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "4",
      "invoiceId": "4",
      "schoolId": "1",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "not valid",
      "amount": 32100
    },
    {
      "id": "5",
      "invoiceId": "5",
      "schoolId": "1",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "6",
      "invoiceId": "6",
      "schoolId": "2",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "7",
      "invoiceId": "7",
      "schoolId": "2",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "8",
      "invoiceId": "8",
      "schoolId": "2",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "9",
      "invoiceId": "9",
      "schoolId": "2",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "10",
      "invoiceId": "10",
      "schoolId": "2",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "11",
      "invoiceId": "11",
      "schoolId": "3",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "12",
      "invoiceId": "12",
      "schoolId": "3",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "13",
      "invoiceId": "13",
      "schoolId": "3",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "14",
      "invoiceId": "14",
      "schoolId": "3",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "15",
      "invoiceId": "15",
      "schoolId": "3",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "16",
      "invoiceId": "16",
      "schoolId": "4",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "17",
      "invoiceId": "17",
      "schoolId": "4",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "18",
      "invoiceId": "18",
      "schoolId": "4",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "19",
      "invoiceId": "19",
      "schoolId": "4",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "20",
      "invoiceId": "20",
      "schoolId": "4",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "21",
      "invoiceId": "21",
      "schoolId": "5",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "22",
      "invoiceId": "22",
      "schoolId": "5",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "23",
      "invoiceId": "23",
      "schoolId": "5",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "bounced",
      "amount": 4000
    },
    {
      "id": "24",
      "invoiceId": "24",
      "schoolId": "5",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "25",
      "invoiceId": "25",
      "schoolId": "5",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "26",
      "invoiceId": "26",
      "schoolId": "6",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "27",
      "invoiceId": "27",
      "schoolId": "6",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "28",
      "invoiceId": "28",
      "schoolId": "6",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "29",
      "invoiceId": "29",
      "schoolId": "6",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "30",
      "invoiceId": "30",
      "schoolId": "6",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "31",
      "invoiceId": "31",
      "schoolId": "7",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "32",
      "invoiceId": "32",
      "schoolId": "7",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "33",
      "invoiceId": "33",
      "schoolId": "7",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "34",
      "invoiceId": "34",
      "schoolId": "7",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 32100
    },
    {
      "id": "35",
      "invoiceId": "35",
      "schoolId": "7",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 4000
    },
    {
      "id": "36",
      "invoiceId": "1",
      "schoolId": "1",
      "productId": "1",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 15400
    },
    {
      "id": "37",
      "invoiceId": "2",
      "schoolId": "1",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 87300
    },
    {
      "id": "38",
      "invoiceId": "3",
      "schoolId": "1",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "39",
      "invoiceId": "4",
      "schoolId": "1",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "invalid",
      "amount": 87300
    },
    {
      "id": "40",
      "invoiceId": "5",
      "schoolId": "1",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "41",
      "invoiceId": "6",
      "schoolId": "2",
      "productId": "1",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 15400
    },
    {
      "id": "42",
      "invoiceId": "7",
      "schoolId": "2",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 87300
    },
    {
      "id": "43",
      "invoiceId": "8",
      "schoolId": "2",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "invalid",
      "amount": 9000
    },
    {
      "id": "44",
      "invoiceId": "9",
      "schoolId": "2",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 87300
    },
    {
      "id": "45",
      "invoiceId": "10",
      "schoolId": "2",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "46",
      "invoiceId": "11",
      "schoolId": "3",
      "productId": "1",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 15400
    },
    {
      "id": "47",
      "invoiceId": "12",
      "schoolId": "3",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 87300
    },
    {
      "id": "48",
      "invoiceId": "13",
      "schoolId": "3",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "49",
      "invoiceId": "14",
      "schoolId": "3",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "invalid",
      "amount": 87300
    },
    {
      "id": "50",
      "invoiceId": "15",
      "schoolId": "3",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "51",
      "invoiceId": "16",
      "schoolId": "4",
      "productId": "1",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 15400
    },
    {
      "id": "52",
      "invoiceId": "17",
      "schoolId": "4",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "invalid",
      "amount": 87300
    },
    {
      "id": "53",
      "invoiceId": "18",
      "schoolId": "4",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "pending",
      "amount": 9000
    },
    {
      "id": "54",
      "invoiceId": "19",
      "schoolId": "4",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 87300
    },
    {
      "id": "55",
      "invoiceId": "20",
      "schoolId": "4",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "56",
      "invoiceId": "21",
      "schoolId": "5",
      "productId": "1",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 15400
    },
    {
      "id": "57",
      "invoiceId": "22",
      "schoolId": "5",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 87300
    },
    {
      "id": "58",
      "invoiceId": "23",
      "schoolId": "5",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "59",
      "invoiceId": "24",
      "schoolId": "5",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 87300
    },
    {
      "id": "60",
      "invoiceId": "25",
      "schoolId": "5",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "pending",
      "amount": 9000
    },
    {
      "id": "61",
      "invoiceId": "26",
      "schoolId": "5",
      "productId": "1",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 15400
    },
    {
      "id": "62",
      "invoiceId": "27",
      "schoolId": "6",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 87300
    },
    {
      "id": "63",
      "invoiceId": "28",
      "schoolId": "6",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "64",
      "invoiceId": "29",
      "schoolId": "6",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 87300
    },
    {
      "id": "65",
      "invoiceId": "30",
      "schoolId": "6",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "66",
      "invoiceId": "31",
      "schoolId": "7",
      "productId": "1",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 15400
    },
    {
      "id": "67",
      "invoiceId": "32",
      "schoolId": "7",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 87300
    },
    {
      "id": "68",
      "invoiceId": "33",
      "schoolId": "7",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "69",
      "invoiceId": "34",
      "schoolId": "7",
      "productId": "2",
      "collectionDate": "2023-11-18",
      "status": "pending",
      "amount": 87300
    },
    {
      "id": "70",
      "invoiceId": "35",
      "schoolId": "7",
      "productId": "3",
      "collectionDate": "2023-11-18",
      "status": "valid",
      "amount": 9000
    },
    {
      "id": "71",
      "invoiceId": "1",
      "schoolId": "1",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "72",
      "invoiceId": "2",
      "schoolId": "1",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "73",
      "invoiceId": "3",
      "schoolId": "1",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "74",
      "invoiceId": "4",
      "schoolId": "1",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "75",
      "invoiceId": "5",
      "schoolId": "1",
      "collectionDate": "2023-10-18",
      "status": "pending",
      "amount": 10000
    },
    {
      "id": "76",
      "invoiceId": "6",
      "schoolId": "2",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "77",
      "invoiceId": "7",
      "schoolId": "2",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "78",
      "invoiceId": "8",
      "schoolId": "2",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "invalid",
      "amount": 10000
    },
    {
      "id": "79",
      "invoiceId": "9",
      "schoolId": "2",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "80",
      "invoiceId": "10",
      "schoolId": "2",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "81",
      "invoiceId": "11",
      "schoolId": "3",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "82",
      "invoiceId": "12",
      "schoolId": "3",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "83",
      "invoiceId": "13",
      "schoolId": "3",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "84",
      "invoiceId": "14",
      "schoolId": "3",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "85",
      "invoiceId": "15",
      "schoolId": "3",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "pending",
      "amount": 10000
    },
    {
      "id": "86",
      "invoiceId": "16",
      "schoolId": "4",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "87",
      "invoiceId": "17",
      "schoolId": "4",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "88",
      "invoiceId": "18",
      "schoolId": "4",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "89",
      "invoiceId": "19",
      "schoolId": "4",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "pending",
      "amount": 10000
    },
    {
      "id": "90",
      "invoiceId": "20",
      "schoolId": "4",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "91",
      "invoiceId": "21",
      "schoolId": "5",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "92",
      "invoiceId": "22",
      "schoolId": "5",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "93",
      "invoiceId": "23",
      "schoolId": "5",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "94",
      "invoiceId": "24",
      "schoolId": "5",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "95",
      "invoiceId": "25",
      "schoolId": "5",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "96",
      "invoiceId": "26",
      "schoolId": "5",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "97",
      "invoiceId": "27",
      "schoolId": "6",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "pending",
      "amount": 10000
    },
    {
      "id": "98",
      "invoiceId": "28",
      "schoolId": "6",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "99",
      "invoiceId": "29",
      "schoolId": "6",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "pending",
      "amount": 10000
    },
    {
      "id": "100",
      "invoiceId": "30",
      "schoolId": "6",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "101",
      "invoiceId": "31",
      "schoolId": "7",
      "productId": "1",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "102",
      "invoiceId": "32",
      "schoolId": "7",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "invalid",
      "amount": 10000
    },
    {
      "id": "103",
      "invoiceId": "33",
      "schoolId": "7",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    },
    {
      "id": "104",
      "invoiceId": "34",
      "schoolId": "7",
      "productId": "2",
      "collectionDate": "2023-10-18",
      "status": "pending",
      "amount": 10000
    },
    {
      "id": "105",
      "invoiceId": "35",
      "schoolId": "7",
      "productId": "3",
      "collectionDate": "2023-10-18",
      "status": "valid",
      "amount": 10000
    }
  ]

  exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }