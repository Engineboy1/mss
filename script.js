document.addEventListener("DOMContentLoaded", function(){
	const form = document.getElementById("result-form");
	const resultDiv = document.getElementById("result");

	const results = {
		"0158": {
			"name": "Student Name 1",
			"grade": "A",
			"remarks": "Excellent performance!",
			"term-1": {
				"name": "Abdullahi Sani Abdullahi",
				"grade": "Not yet ready",
				"remarks": "Excellent performance in Term 1!"
			},
			"term-2": {
				"name": "Student Name 1",
				"grade": "B",
				"remarks": "Good effort in Term 2!"
			},
			"term-3": {
				"name": "Student Name 1",
				"grade": "A",
				"remarks": "Excellent performance in Term 3!"
			}
		},
		"0169": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Habibu Sulaiman",
				"grade": "18",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		// Add more students here
		"0111": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Zainab Abdulgafar",
				"grade": "0",
				"remarks": "Very poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0115": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Abubakar Musa",
				"grade": "8",
				"remarks": "Fair"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0121": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Hafsat  Kabir Abubakar",
				"grade": "9",
				"remarks": "Fair"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0131": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Abdullahi  Mas ud",
				"grade": "8",
				"remarks": "Fair"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0113": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Maimunatu Mahmud Kabir",
				"grade": "7",
				"remarks": "Fair"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0140": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Aisara Dikko",
				"grade": "11",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0127": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Fatima Musa",
				"grade": "6",
				"remarks": "Fair"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0132": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Zainab  Aliyu",
				"grade": "17",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0168": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Ahmad Shehu Raubilu",
				"grade": "13",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0119": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Maimunatu  Lawal Ibrahim",
				"grade": "20",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0162": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Abdulrahman  Adamu",
				"grade": "10",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0146": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Abdulsalam Umar",
				"grade": "9",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0172": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Khadija Ibrahim",
				"grade": "10",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0152": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Fauziya Isiya",
				"grade": "5",
				"remarks": "poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0166": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Nana Firdausi Usman",
				"grade": "7",
				"remarks": "Fair"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0176": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Bilal Sulaima",
				"grade": "5",
				"remarks": "Poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0148": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Maimunatu Salisu Abdulsalam",
				"grade": "6",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0117": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Hamza Adamu",
				"grade": "2",
				"remarks": "Poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0123": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Maryam Hassan Chiroma",
				"grade": "15",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0208": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Shuaibu Muhammad",
				"grade": "9",
				"remarks": "Fair!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0110": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Muhammad Sai'du ",
				"grade": "10",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0138": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Umar Abubakar",
				"grade": "18",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0144": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Umar Muhammad",
				"grade": "17",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0125": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Yusuf Ibrahim Musa",
				"grade": "20",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"01110": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Kamal Salisu",
				"grade": "10",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0174": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Khadija Sulaima",
				"grade": "11",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0212": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Abdulhamid Muhammad",
				"grade": "11",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0206": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Hajara Nasir",
				"grade": "11",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0156": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Sadiya Musa Muhammad",
				"grade": "10",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0222": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Abubakar Aliyu",
				"grade": "6",
				"remarks": "Fair"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0224": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Fatima Isiya Yahaya",
				"grade": "8",
				"remarks": "Fair"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0226": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Fauziya Salisu",
				"grade": "7",
				"remarks": "Good"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0112": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Ibrahim Sai'du",
				"grade": "20",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0157": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Auwal Bashir Mustapha",
				"grade": "12",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0141": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Ishaq Isah",
				"grade": "5",
				"remarks": "Poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0137": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Muhammad Kabir Hamid",
				"grade": "6",
				"remarks": "Poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0139": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Sha'itu  Dikko",
				"grade": "3",
				"remarks": "Poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0173": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Tijjani M Ibrahim",
				"grade": "12",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0120": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Abdulmajid Hussaini Umar",
				"grade": "5",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0122": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Khalid Abubakar Aliyu",
				"grade": "5",
				"remarks": "Poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0145": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Abdulrahman Umar",
				"grade": "5",
				"remarks": "Poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0118": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Hafsat Abdullahi Maitama",
				"grade": "12",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0126": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Zainab Adamu",
				"grade": "15",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0130": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Khadija Abdulkarim",
				"grade": "5",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0114": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Safiyya Abbas",
				"grade": "5",
				"remarks": "Poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0149": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Nafa'atu Salisu Abdulsalam",
				"grade": "10",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0159": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Ummulkhairi Jamilu",
				"grade": "15",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0147": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Maryam Abdulkadir",
				"grade": "5",
				"remarks": "Poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0191": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Aisha Nura",
				"grade": "5",
				"remarks": "Poor"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		"0201": {
			"name": "Student Name 2",
			"grade": "B",
			"remarks": "Good effort!",
			"term-1": {
				"name": "Abubakar S Abubakar",
				"grade": "18",
				"remarks": "Good effort in first CA!"
			},
			"term-2": {
				"name": "Student Name 2",
				"grade": "A",
				"remarks": "Excellent performance in Term 2!"
			},
			"term-3": {
				"name": "Student Name 2",
				"grade": "B",
				"remarks": "Good effort in Term 3!"
			}
		},
		
	};

	form.addEventListener("submit", function(event){
		event.preventDefault();
		const studentId = document.getElementById("student-id").value;
		const term = document.getElementById("term").value;
		
		const studentResult = results[studentId];
		if (studentResult) {
			const resultHtml = `
				<h2>Term ${term} Result</h2>
				<p>Name: ${studentResult["term-" + term].name}</p>
				<p>Grade: ${studentResult["term-" + term].grade}</p>
				<p>Remarks: ${studentResult["term-" + term].remarks}</p>
			`;
			resultDiv.innerHTML = resultHtml;
		} else {
			resultDiv.innerHTML = "No result found for this student.";
		}
	});
});
