$(document).ready(async function () {
  // var object = $.parseJSON(JSON.stringify(await $.getJSON('./assets/js/productlist.json')));
  var object = $.parseJSON(`[
  {
      "id": "1",
      "name": "Áo len sọc lớn màu",
      "price": "420000",
      "categories": "đồ nam, áo thun nam, áo thun tay dài nam",
      "imglink": "men/1.jpg",
      "colors": "black, green, orange",
      "subimglink": "men/1-a.jpg, men/1-b.jpg, men/1-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "2",
      "name": "Áo len sọc phối màu",
      "price": "420000",
      "categories": "đồ nam, áo thun nam, áo thun tay dài nam",
      "imglink": "men/2.jpg",
      "colors": "brown, orange",
      "subimglink": "men/2-a.jpg, men/2-b.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "3",
      "name": "Áo len traffic",
      "price": "420000",
      "categories": "đồ nam, áo thun nam, áo thun tay dài nam",
      "imglink": "men/3.jpg",
      "colors": "brown, green, brown cream",
      "subimglink": "men/3-a.jpg, men/3-b.jpg, men/3-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "4",
      "name": "Áo len nhiều màu",
      "price": "420000",
      "categories": "đồ nam, áo thun nam, áo thun tay dài nam",
      "imglink": "men/4.jpg",
      "colors": "black, grey, blue, brown, white",
      "subimglink": "men/4-a.jpg, men/4-b.jpg, men/4-c.jpg, men/4-d.jpg, men/4-e.jpg  ",
      "size": "M, L, XL"
  },
  {
      "id": "5",
      "name": "Áo len phối màu",
      "price": "420000",
      "categories": "đồ nam, áo thun nam, áo thun tay dài nam",
      "imglink": "men/5.jpg",
      "colors": "black, brown",
      "subimglink": "men/5-a.jpg, men/5-b.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "6",
      "name": "Áo sweate nam",
      "price": "450000",
      "categories": "đồ nam, áo thun nam, áo thun tay dài nam",
      "imglink": "men/6.jpg",
      "colors": "cream, black ,blue, yellow",
      "subimglink": "men/6-a.jpg, men/6-b.jpg, men/6-c.jpg, men/6-d.jpg ",
      "size": "M, L, XL"
  },
  {
      "id": "7",
      "name": "Áo polo nam - Up to you",
      "price": "365000",
      "categories": "đồ nam, áo thun nam, áo thun polo nam",
      "imglink": "men/7.jpg",
      "colors": "black, blue, green",
      "subimglink": "men/7-a.jpg, men/7-b.jpg, men/7-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "8",
      "name": "Áo polo nam - Simple day",
      "price": "345000",
      "categories": "đồ nam, áo thun nam, áo thun polo nam",
      "imglink": "men/8.jpg",
      "colors": "black, blue, pink, yellow",
      "subimglink": "men/8-a.jpg, men/8-b.jpg, men/8-c.jpg, men/8-d.jpg ",
      "size": "M, L, XL"
  },
  {
      "id": "9",
      "name": "Áo polo M1ATP01205BSFSO",
      "price": "295000",
      "categories": "đồ nam, áo thun nam, áo thun polo nam",
      "imglink": "men/9.jpg",
      "colors": "black, blue, yellow, red",
      "subimglink": "men/9-a.jpg, men/9-b.jpg, men/9-c.jpg, men/9-d.jpg ",
      "size": "L, XL, 2XL"
  },
  {
      "id": "10",
      "name": "Áo polo M1ATP01204BSFSO",
      "price": "295000",
      "categories": "đồ nam, áo thun nam, áo thun polo nam",
      "imglink": "men/10.jpg",
      "colors": "black, grey, green",
      "subimglink": "men/10-a.jpg, men/10-b.jpg, men/10-c.jpg",
      "size": "L, XL"
  },
  {
      "id": "11",
      "name": "Áo polo M1ATP01202BSFTR",
      "price": "315000",
      "categories": "đồ nam, áo thun nam, áo thun polo nam",
      "imglink": "men/11.jpg",
      "colors": "black, grey, green",
      "subimglink": "men/11-a.jpg, men/11-b.jpg, men/11-c.jpg",
      "size": "L, XL"
  },
  {
      "id": "12",
      "name": "Áo polo M2ATP01204BSFTR",
      "price": "295000",
      "categories": "đồ nam, áo thun nam, áo thun polo nam",
      "imglink": "men/12.jpg",
      "colors": "green",
      "subimglink": "men/12-a.jpg",
      "size": "L, XL, 2XL"
  },
  {
      "id": "13",
      "name": "Áo polo M2ATP01203BSFTR",
      "price": "295000",
      "categories": "đồ nam, áo thun nam, áo thun polo nam",
      "imglink": "men/13.jpg",
      "colors": "pink, black, green, brown",
      "subimglink": "men/13-a.jpg, men/13-b.jpg, men/13-c.jpg, men/13-d.jpg ",
      "size": "L, XL, 2XL"
  },
  {
      "id": "14",
      "name": "Áo polo M2ATP01201BSFTR",
      "price": "295000",
      "categories": "đồ nam, áo thun nam, áo thun polo nam",
      "imglink": "men/14.jpg",
      "colors": "black",
      "subimglink": "men/14-a.jpg",
      "size": "L, XL"
  },
  {
      "id": "15",
      "name": "Áo polo M2ATP2051002",
      "price": "295000",
      "categories": "đồ nam, áo thun nam, áo thun polo nam",
      "imglink": "men/15.jpg",
      "colors": "yellow",
      "subimglink": "men/15-a.jpg",
      "size": "L, XL"
  },
  {
      "id": "16",
      "name": "Áo polo M2ATP040001",
      "price": "265000",
      "categories": "đồ nam, áo thun nam, áo thun polo nam",
      "imglink": "men/16.jpg",
      "colors": "yellow",
      "subimglink": "men/16-a.jpg",
      "size": "2XL"
  },
  {
      "id": "17",
      "name": "Áo polo M2ATP119001",
      "price": "275000",
      "categories": "đồ nam, áo thun nam, áo thun polo nam",
      "imglink": "men/17.jpg",
      "colors": "yellow",
      "subimglink": "men/17-a.jpg",
      "size": "XL, 2XL"
  },
  {
      "id": "18",
      "name": "Áo sơmi nam - Deliver",
      "price": "325000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/18.jpg",
      "colors": "black, grey, white",
      "subimglink": "men/18-a.jpg, men/18-b.jpg, men/18-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "19",
      "name": "Áo sơmi nam - Open",
      "price": "315000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/19.jpg",
      "colors": "cream, black, white",
      "subimglink": "men/19-a.jpg, men/19-b.jpg, men/19-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "20",
      "name": "Áo sơmi unisex - Geometric shirt",
      "price": "365000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/20.jpg",
      "colors": "",
      "subimglink": "",
      "size": "M, L"
  },
  {
      "id": "21",
      "name": "Áo sơmi unisex - Human shirt",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/21.jpg",
      "colors": "brown, white",
      "subimglink": "men/21-a.jpg, men/21-b.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "22",
      "name": "Áo sơmi unisex - Alphabet shirt",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/22.jpg",
      "colors": "black, blue, green",
      "subimglink": "men/22-a.jpg, men/22-b.jpg, men/22-c.jpg",
      "size": "L, XL"
  },
  {
      "id": "23",
      "name": "Áo sơmi unisex - Nasa shirt",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/23.jpg",
      "colors": "black, green, white",
      "subimglink": "men/23-a.jpg, men/23-b.jpg, men/23-c.jpg",
      "size": "L, XL"
  },
  {
      "id": "24",
      "name": "Áo sơmi nam - Young",
      "price": "315000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/24.jpg",
      "colors": "black, blue, green, pink",
      "subimglink": "men/24-a.jpg, men/24-b.jpg, men/24-c.jpg, men/24-d.jpg ",
      "size": "M, L, XL"
  },
  {
      "id": "25",
      "name": "Áo sơmi unisex - Wanderlust",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/25.jpg",
      "colors": "blue, white",
      "subimglink": "men/25-a.jpg, men/25-b.jpg",
      "size": "L, XL"
  },
  {
      "id": "26",
      "name": "Áo sơmi unisex - Comic cartoon",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/26.jpg",
      "colors": "cream, black, green",
      "subimglink": "men/26-a.jpg, men/26-b.jpg, men/26-c.jpg",
      "size": "L, XL"
  },
  {
      "id": "27",
      "name": "Áo sơmi nam - Nevermind",
      "price": "295000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/27.jpg",
      "colors": "cream, blue, white",
      "subimglink": "men/27-a.jpg, men/27-b.jpg, men/27-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "28",
      "name": "Áo sơmi nam - Keep going",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/28.jpg",
      "colors": "black, blue, green",
      "subimglink": "men/28-a.jpg, men/28-b.jpg, men/28-c.jpg",
      "size": "L, XL"
  },
  {
      "id": "29",
      "name": "Áo sơmi M1SMN11104FOSHT",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/29.jpg",
      "colors": "grey",
      "subimglink": "men/29-a.jpg",
      "size": "L, XL"
  },
  {
      "id": "30",
      "name": "Áo sơmi M1SMN11102FOSHT",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay ngắn nam",
      "imglink": "men/30.jpg",
      "colors": "black, orange",
      "subimglink": "men/30-a.jpg, men/30-b.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "31",
      "name": "Áo sơmi nam - The basic",
      "price": "325000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/31.jpg",
      "colors": "",
      "subimglink": "",
      "size": "M, L, XL"
  },
  {
      "id": "32",
      "name": "Áo sơmi nam - Cool shirt",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/32.jpg",
      "colors": "",
      "subimglink": "",
      "size": "M, L, XL, 2XL"
  },
  {
      "id": "33",
      "name": "Áo sơmi nam - Simple shirt",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/33.jpg",
      "colors": "",
      "subimglink": "",
      "size": "M, L, XL, 2XL"
  },
  {
      "id": "34",
      "name": "Áo sơmi nam - Format",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/34.jpg",
      "colors": "",
      "subimglink": "",
      "size": "M, L, XL, 2XL"
  },
  {
      "id": "35",
      "name": "Áo sơmi nam - Rock you",
      "price": "315000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/35.jpg",
      "colors": "black, white",
      "subimglink": "men/35-a.jpg, men/35-b.jpg",
      "size": "M, L"
  },
  {
      "id": "36",
      "name": "Áo sơmi nam - Child hood",
      "price": "315000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/36.jpg",
      "colors": "",
      "subimglink": "",
      "size": "M, L, XL"
  },
  {
      "id": "37",
      "name": "Áo sơmi nam - Random pattern",
      "price": "315000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/37.jpg",
      "colors": "",
      "subimglink": "",
      "size": "M, L"
  },
  {
      "id": "38",
      "name": "Áo sơmi nam - Classical",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/38.jpg",
      "colors": "",
      "subimglink": "",
      "size": "M, L, XL"
  },
  {
      "id": "39",
      "name": "Áo sơmi nam - Oxford shirt",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/39.jpg",
      "colors": "cream, blue, white",
      "subimglink": "men/39-a.jpg, men/39-b.jpg, men/39-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "40",
      "name": "Áo sơmi nam - Slay your day",
      "price": "385000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/40.jpg",
      "colors": "black, blue, green, brown",
      "subimglink": "men/40-a.jpg, men/40-b.jpg, men/40-c.jpg, men/40-d.jpg ",
      "size": "M, L, XL"
  },
  {
      "id": "41",
      "name": "Áo sơmi unisex - Treasure",
      "price": "355000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/41.jpg",
      "colors": "black, cream, white",
      "subimglink": "men/41-a.jpg, men/41-b.jpg, men/41-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "42",
      "name": "Áo sơmi nam - Mate",
      "price": "385000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/42.jpg",
      "colors": "cream, green, red",
      "subimglink": "men/42-a.jpg, men/42-b.jpg, men/42-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "43",
      "name": "Áo sơmi M1SMD05201BOSTR",
      "price": "285000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/43.jpg",
      "colors": "black, white",
      "subimglink": "men/43-a.jpg, men/43-b.jpg",
      "size": "M, L, XL, 2XL"
  },
  {
      "id": "44",
      "name": "Áo sơmi M1SMD04201FOSBA",
      "price": "315000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/44.jpg",
      "colors": "cream, grey, white",
      "subimglink": "men/44-a.jpg, men/44-b.jpg, men/44-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "45",
      "name": "Áo sơmi M1SMD02201BOSTR",
      "price": "320000",
      "categories": "đồ nam, áo sơmi nam, áo sơmi tay dài nam",
      "imglink": "men/45.jpg",
      "colors": "black, grey, white",
      "subimglink": "men/45-a.jpg, men/45-b.jpg, men/45-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "46",
      "name": "Shorts kaki nam - 10201",
      "price": "295000",
      "categories": "đồ nam, quần short nam, quần short kaki nam",
      "imglink": "men/46.jpg",
      "colors": "cream, black, grey, white ",
      "subimglink": "men/46-a.jpg, men/46-b.jpg, men/46-c.jpg, men/46-d.jpg ",
      "size": "28, 29, 30, 31, 32, 34, 36"
  },
  {
      "id": "47",
      "name": "Shorts kaki nam - 07201",
      "price": "295000",
      "categories": "đồ nam, quần short nam, quần short kaki nam",
      "imglink": "men/47.jpg",
      "colors": "red, black, grey, blue, white",
      "subimglink": "men/47-a.jpg, men/47-b.jpg, men/47-c.jpg, men/47-d.jpg, men/47-e.jpg  ",
      "size": "28, 29, 30, 31, 32, 34, 36"
  },
  {
      "id": "48",
      "name": "Shorts kaki unisex - Color wash",
      "price": "345000",
      "categories": "đồ nam, quần short nam, quần short kaki nam",
      "imglink": "men/48.jpg",
      "colors": "cream, black, grey",
      "subimglink": "men/48-a.jpg, men/48-b.jpg, men/48-c.jpg",
      "size": "S, M, L, XL"
  },
  {
      "id": "49",
      "name": "Shorts kaki unisex - Classic",
      "price": "325000",
      "categories": "đồ nam, quần short nam, quần short kaki nam",
      "imglink": "men/49.jpg",
      "colors": "cream, black, pink, red, white",
      "subimglink": "men/49-a.jpg, men/49-b.jpg, men/49-c.jpg, men/49-d.jpg, men/49-e.jpg  ",
      "size": "M, L, XL"
  },
  {
      "id": "50",
      "name": "Shorts kaki nam - Classic",
      "price": "345000",
      "categories": "đồ nam, quần short nam, quần short kaki nam",
      "imglink": "men/50.jpg",
      "colors": "black, grey, brown",
      "subimglink": "men/50-a.jpg, men/50-b.jpg, men/50-c.jpg",
      "size": "M, L, XL, 2XL"
  },
  {
      "id": "51",
      "name": "Quần short M1SKK03201BSFTR",
      "price": "285000",
      "categories": "đồ nam, quần short nam, quần short kaki nam",
      "imglink": "men/51.jpg",
      "colors": "cream, grey, white",
      "subimglink": "men/51-a.jpg, men/51-b.jpg, men/51-c.jpg",
      "size": "29, 30, 31, 32, 34, 36"
  },
  {
      "id": "52",
      "name": "Quần short M1SKK1061002",
      "price": "265000",
      "categories": "đồ nam, quần short nam, quần short kaki nam",
      "imglink": "men/52.jpg",
      "colors": "black",
      "subimglink": "men/52-a.jpg",
      "size": "29, 30, 31"
  },
  {
      "id": "53",
      "name": "Quần short M1SKK1041002",
      "price": "265000",
      "categories": "đồ nam, quần short nam, quần short kaki nam",
      "imglink": "men/53.jpg",
      "colors": "blue, green, yellow, orange",
      "subimglink": "men/53-a.jpg, men/53-b.jpg, men/53-c.jpg, men/53-d.jpg ",
      "size": "29, 30, 31, 32, 34"
  },
  {
      "id": "54",
      "name": "Shorts jean nam - 10202",
      "price": "345000",
      "categories": "đồ nam, quần short nam, quần short jean nam",
      "imglink": "men/54.jpg",
      "colors": "",
      "subimglink": "",
      "size": "28, 29, 30, 31, 32, 34, 36"
  },
  {
      "id": "55",
      "name": "Shorts jean nam - 10201",
      "price": "345000",
      "categories": "đồ nam, quần short nam, quần short jean nam",
      "imglink": "men/55.jpg",
      "colors": "",
      "subimglink": "",
      "size": "28, 29, 30, 31, 32, 34, 36"
  },
  {
      "id": "56",
      "name": "Shorts jean nam - 08202",
      "price": "325000",
      "categories": "đồ nam, quần short nam, quần short jean nam",
      "imglink": "men/56.jpg",
      "colors": "",
      "subimglink": "",
      "size": "28, 29, 30, 31, 32, 34"
  },
  {
      "id": "57",
      "name": "Shorts jean nam - 08201",
      "price": "345000",
      "categories": "đồ nam, quần short nam, quần short jean nam",
      "imglink": "men/57.jpg",
      "colors": "",
      "subimglink": "",
      "size": "28, 29, 30, 31, 32, 34"
  },
  {
      "id": "58",
      "name": "Shorts jean nam - Be young and wild",
      "price": "345000",
      "categories": "đồ nam, quần short nam, quần short jean nam",
      "imglink": "men/58.jpg",
      "colors": "",
      "subimglink": "",
      "size": "28, 29, 30, 31, 32, 34, 36"
  },
  {
      "id": "59",
      "name": "Shorts jean nam - 05201",
      "price": "345000",
      "categories": "đồ nam, quần short nam, quần short jean nam",
      "imglink": "men/59.jpg",
      "colors": "blue",
      "subimglink": "men/59-a.jpg",
      "size": "28, 29, 30, 31, 32, 34, 36"
  },
  {
      "id": "60",
      "name": "Quần short M1SJN04201FSFTR",
      "price": "295000",
      "categories": "đồ nam, quần short nam, quần short jean nam",
      "imglink": "men/60.jpg",
      "colors": "black",
      "subimglink": "men/60-a.jpg",
      "size": "28, 29, 30, 31, 32, 34"
  },
  {
      "id": "61",
      "name": "Quần short M1SJN03202FSFRI",
      "price": "345000",
      "categories": "đồ nam, quần short nam, quần short jean nam",
      "imglink": "men/61.jpg",
      "colors": "blue",
      "subimglink": "men/61-a.jpg",
      "size": "28, 29, 30, 31, 32, 36"
  },
  {
      "id": "62",
      "name": "Shorts thun nam - Freedom",
      "price": "345000",
      "categories": "đồ nam, quần short nam, quần short thun nam",
      "imglink": "men/62.jpg",
      "colors": "cream, black, grey",
      "subimglink": "men/62-a.jpg, men/62-b.jpg, men/62-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "63",
      "name": "Shorts unisex - Imagination",
      "price": "245000",
      "categories": "đồ nam, quần short nam, quần short thun nam",
      "imglink": "men/63.jpg",
      "colors": "black, blue, green, pink",
      "subimglink": "men/63-a.jpg, men/63-b.jpg, men/63-c.jpg, men/63-d.jpg ",
      "size": "S, M, L, XL"
  },
  {
      "id": "64",
      "name": "Short nam - Number 5",
      "price": "325000",
      "categories": "đồ nam, quần short nam, quần short thun nam",
      "imglink": "men/64.jpg",
      "colors": "cream, black, blue, green, orange",
      "subimglink": "men/64-a.jpg, men/64-b.jpg, men/64-c.jpg, men/64-d.jpg, men/64-e.jpg  ",
      "size": "M, L, XL, 2XL"
  },
  {
      "id": "65",
      "name": "Quần short M2STH3041007",
      "price": "245000",
      "categories": "đồ nam, quần short nam, quần short thun nam",
      "imglink": "men/65.jpg",
      "colors": "yellow",
      "subimglink": "men/65-a.jpg",
      "size": "L"
  },
  {
      "id": "66",
      "name": "Quần short M2STH3041003",
      "price": "245000",
      "categories": "đồ nam, quần short nam, quần short thun nam",
      "imglink": "men/66.jpg",
      "colors": "white",
      "subimglink": "men/66-a.jpg",
      "size": "L, XL"
  },
  {
      "id": "67",
      "name": "Quần jean nam - Slimfit - 10206",
      "price": "425000",
      "categories": "đồ nam, quần dài nam, quần jean cá tính nam",
      "imglink": "men/67.jpg",
      "colors": "",
      "subimglink": "",
      "size": "28, 29, 30, 31, 32, 34, 36"
  },
  {
      "id": "68",
      "name": "Quần jean nam - Slimfit - 08204",
      "price": "425000",
      "categories": "đồ nam, quần dài nam, quần jean cá tính nam",
      "imglink": "men/68.jpg",
      "colors": "",
      "subimglink": "",
      "size": "28, 29, 30, 31, 32, 34, 36"
  },
  {
      "id": "69",
      "name": "Quần jean nam - Slimfit - 07213",
      "price": "425000",
      "categories": "đồ nam, quần dài nam, quần jean cá tính nam",
      "imglink": "men/69.jpg",
      "colors": "",
      "subimglink": "",
      "size": "28, 29, 30, 31, 32, 34"
  },
  {
      "id": "70",
      "name": "Quần jogger - Slimfit - 07201",
      "price": "415000",
      "categories": "đồ nam, quần dài nam, quần jogger nam",
      "imglink": "men/70.jpg",
      "colors": "cream, black, white",
      "subimglink": "men/70-a.jpg, men/70-b.jpg, men/70-c.jpg",
      "size": "S, M, L, XL"
  },
  {
      "id": "71",
      "name": "Quần tây nam KKB089015",
      "price": "315000",
      "categories": "đồ nam, quần dài nam, quần kaki nam",
      "imglink": "men/71.jpg",
      "colors": "dark grey, black, grey",
      "subimglink": "men/71-a.jpg, men/71-b.jpg, men/71-c.jpg",
      "size": "29, 30, 31, 32, 34, 36"
  },
  {
      "id": "72",
      "name": "Áo thun unisex - Favorite person",
      "price": "345000",
      "categories": "đồ unisex, áo thun unisex, áo thun tay ngắn unisex",
      "imglink": "men/72.jpg",
      "colors": "beige, light grey, light blue, pink",
      "subimglink": "men/72-a.jpg, men/72-b.jpg, men/72-c.jpg, men/72-d.jpg ",
      "size": "M, L, XL"
  },
  {
      "id": "73",
      "name": "Áo thun unisex - Reliable",
      "price": "285000",
      "categories": "đồ unisex, áo thun unisex, áo thun tay ngắn unisex",
      "imglink": "men/73.jpg",
      "colors": "cream, black, green, white",
      "subimglink": "men/73-a.jpg, men/73-b.jpg, men/73-c.jpg, men/73-d.jpg ",
      "size": "M, L, XL"
  },
  {
      "id": "74",
      "name": "Áo thun unisex - Enthusiasm",
      "price": "300000",
      "categories": "đồ unisex, áo thun unisex, áo thun tay ngắn unisex",
      "imglink": "men/74.jpg",
      "colors": "blue, green, orange, white",
      "subimglink": "men/74-a.jpg, men/74-b.jpg, men/74-c.jpg, men/74-d.jpg ",
      "size": "M, L, XL"
  },
  {
      "id": "75",
      "name": "Áo thun unisex - Number 5",
      "price": "300000",
      "categories": "đồ unisex, áo thun unisex, áo thun tay ngắn unisex",
      "imglink": "men/75.jpg",
      "colors": "black, brown, white",
      "subimglink": "men/75-a.jpg, men/75-b.jpg, men/75-c.jpg",
      "size": "M, L, XL"
  },
  {
      "id": "76",
      "name": "Áo thun W2ATN09207FOSHT",
      "price": "205000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/1.jpg",
      "colors": "yellow, cream, grey, blue, green, pink purple",
      "subimglink": "women/1-a.jpg, women/1-b.jpg, women/1-c.jpg, women/1-d.jpg, women/1-e.jpg, women/1-f.jpg",
      "size": "S, M, L"
  },
  {
      "id": "77",
      "name": "Áo thun - Priceless",
      "price": "235000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/2.jpg",
      "colors": "purple, pink, yellow",
      "subimglink": "women/2-a.jpg, women/2-b.jpg, women/2-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "78",
      "name": "Áo thun W2ATN09205FOSHT",
      "price": "205000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/3.jpg",
      "colors": "blue",
      "subimglink": "women/3-a.jpg",
      "size": "S, M, L"
  },
  {
      "id": "79",
      "name": "Áo thun W2ATN08203BOSBA",
      "price": "185000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/4.jpg",
      "colors": "pink, cream, black, blue, yellow",
      "subimglink": "women/4-a.jpg, women/4-b.jpg, women/4-c.jpg, women/4-d.jpg, women/4-e.jpg",
      "size": "S, M, L"
  },
  {
      "id": "80",
      "name": "Áo thun W2ATN09203FOSHT",
      "price": "235000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/5.jpg",
      "colors": "black, grey, white",
      "subimglink": "women/5-a.jpg, women/5-b.jpg, women/5-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "81",
      "name": "Áo thun W2ATN09201FOSHT",
      "price": "235000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/6.jpg",
      "colors": "black, blue, pink, white",
      "subimglink": "women/6-a.jpg, women/6-b.jpg, women/6-c.jpg, women/6-d.jpg",
      "size": "S, M, L"
  },
  {
      "id": "82",
      "name": "Áo thun W2ATN08213BOSHT",
      "price": "235000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/7.jpg",
      "colors": "black, blue, orange, white",
      "subimglink": "women/7-a.jpg, women/7-b.jpg, women/7-c.jpg, women/7-d.jpg",
      "size": "S, M, L"
  },
  {
      "id": "83",
      "name": "Áo thun W2ATN08212BOSBA",
      "price": "215000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/8.jpg",
      "colors": "beige, pink, black",
      "subimglink": "women/8-a.jpg, women/8-b.jpg, women/8-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "84",
      "name": "Áo thun W2ATN08211BOSBA",
      "price": "215000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/9.jpg",
      "colors": "cream, black, blue, yellow",
      "subimglink": "women/9-a.jpg, women/9-b.jpg, women/9-c.jpg, women/9-d.jpg",
      "size": "S, M, L"
  },
  {
      "id": "85",
      "name": "Áo thun W2ATN08210BOSBA",
      "price": "195000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/10.jpg",
      "colors": "black, blue, white, orange",
      "subimglink": "women/10-a.jpg, women/10-b.jpg, women/10-c.jpg, women/10-d.jpg",
      "size": "S, M, L"
  },
  {
      "id": "86",
      "name": "Áo thun W2ATN08209BOSHT",
      "price": "195000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/11.jpg",
      "colors": "pink, black, blue",
      "subimglink": "women/11-a.jpg, women/11-b.jpg, women/11-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "87",
      "name": "Áo thun W2ATN08208BOSBA",
      "price": "195000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay ngắn nữ",
      "imglink": "women/12.jpg",
      "colors": "pink, black, white, yellow",
      "subimglink": "women/12-a.jpg, women/12-b.jpg, women/12-c.jpg, women/12-d.jpg",
      "size": "S, M, L"
  },
  {
      "id": "88",
      "name": "Áo len W2ALD12102BSFTR",
      "price": "185000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay dài nữ",
      "imglink": "women/13.jpg",
      "colors": "light yellow, white",
      "subimglink": "women/13-a.jpg, women/13-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "89",
      "name": "Áo thun W2ATD120003",
      "price": "245000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay dài nữ",
      "imglink": "women/14.jpg",
      "colors": "pink, red pink",
      "subimglink": "women/14-a.jpg, women/14-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "90",
      "name": "Áo thun W2ATD120002",
      "price": "245000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay dài nữ",
      "imglink": "women/15.jpg",
      "colors": "pink, red pink",
      "subimglink": "women/15-a.jpg, women/15-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "91",
      "name": "Áo thun  W2ATD110021",
      "price": "215000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay dài nữ",
      "imglink": "women/16.jpg",
      "colors": "black, red",
      "subimglink": "women/16-a.jpg, women/16-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "92",
      "name": "Áo thun W2ATD110019",
      "price": "215000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay dài nữ",
      "imglink": "women/17.jpg",
      "colors": "black, red",
      "subimglink": "women/17-a.jpg, women/17-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "93",
      "name": "Áo thun W2ATD110010",
      "price": "195000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay dài nữ",
      "imglink": "women/18.jpg",
      "colors": "black, red",
      "subimglink": "women/18-a.jpg, women/18-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "94",
      "name": "Áo thun W2ATD110006",
      "price": "215000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay dài nữ",
      "imglink": "women/19.jpg",
      "colors": "purple, pink, yellow",
      "subimglink": "women/19-a.jpg, women/19-b.jpg, women/19-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "95",
      "name": "Áo thun W2ATD110002",
      "price": "195000",
      "categories": "Đồ nữ, áo thun nữ, áo thun tay dài nữ",
      "imglink": "women/20.jpg",
      "colors": "yellow",
      "subimglink": "women/20-a.jpg",
      "size": "S, M, L"
  },
  {
      "id": "96",
      "name": "Áo sơmi nữ - Uptoyou",
      "price": "275000",
      "categories": "Đồ nữ, áo sơmi nữ, áo sơmi tay dài nữ",
      "imglink": "women/21.jpg",
      "colors": "black, pink, yellow",
      "subimglink": "women/21-a.jpg, women/21-b.jpg, women/21-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "97",
      "name": "Áo sơmi nữ - Today Toyou",
      "price": "295000",
      "categories": "Đồ nữ, áo sơmi nữ, áo sơmi tay dài nữ",
      "imglink": "women/22.jpg",
      "colors": "pink, yellow, orange",
      "subimglink": "women/22-a.jpg, women/22-b.jpg, women/22-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "98",
      "name": "Áo sơmi nữ - Color Plaid",
      "price": "280000",
      "categories": "Đồ nữ, áo sơmi nữ, áo sơmi tay dài nữ",
      "imglink": "women/23.jpg",
      "colors": "black, pink, yellow",
      "subimglink": "women/23-a.jpg, women/23-b.jpg, women/23-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "99",
      "name": "Áo sơmi W2SMD05204BOSTR",
      "price": "225000",
      "categories": "Đồ nữ, áo sơmi nữ, áo sơmi tay dài nữ",
      "imglink": "women/24.jpg",
      "colors": "dark blue, green, pink white",
      "subimglink": "women/24-a.jpg, women/24-b.jpg, women/24-c.jpg, women/24-d.jpg",
      "size": "S, M, L"
  },
  {
      "id": "100",
      "name": "Áo sơmi W2SMD05202FOSCR",
      "price": "265000",
      "categories": "Đồ nữ, áo sơmi nữ, áo sơmi tay dài nữ",
      "imglink": "women/25.jpg",
      "colors": "brown",
      "subimglink": "women/25-a.jpg",
      "size": "S, M, L"
  },
  {
      "id": "101",
      "name": "Áo sơmi W2SMD05203BOSTR",
      "price": "225000",
      "categories": "Đồ nữ, áo sơmi nữ, áo sơmi tay dài nữ",
      "imglink": "women/26.jpg",
      "colors": "cream, green, pink, white",
      "subimglink": "women/26-a.jpg, women/26-b.jpg, women/26-c.jpg, women/26-d.jpg",
      "size": "S, M, L"
  },
  {
      "id": "102",
      "name": "Set sơmi W2SET05201FOSCR",
      "price": "295000",
      "categories": "Đồ nữ, áo sơmi nữ, áo sơmi tay ngắn nữ",
      "imglink": "women/27.jpg",
      "colors": "cream, pink, white",
      "subimglink": "women/27-a.jpg, women/27-b.jpg, women/27-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "103",
      "name": "Áo sơmi W2SMN05201BOSTR",
      "price": "185000",
      "categories": "Đồ nữ, áo sơmi nữ, áo sơmi tay ngắn nữ",
      "imglink": "women/28.jpg",
      "colors": "black, green, orange",
      "subimglink": "women/28-a.jpg, women/28-b.jpg, women/28-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "104",
      "name": "Quần short W2SKK06201FBGTR",
      "price": "230000",
      "categories": "Đồ nữ, quần short nữ , quần short kaki nữ",
      "imglink": "women/29.jpg",
      "colors": "black, brown",
      "subimglink": "women/29-a.jpg, women/29-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "105",
      "name": "Quần short W2SKK12101FSFTR",
      "price": "225000",
      "categories": "Đồ nữ, quần short nữ , quần short kaki nữ",
      "imglink": "women/30.jpg",
      "colors": "brown, black",
      "subimglink": "women/30-a.jpg, women/30-b.jpg",
      "size": "S, M"
  },
  {
      "id": "106",
      "name": "Quần short W2SJN03202FBGTR",
      "price": "265000",
      "categories": "Đồ nữ, quần short nữ , quần short jean nữ",
      "imglink": "women/31.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M, L"
  },
  {
      "id": "107",
      "name": "Shorts jean nữ  - 10205",
      "price": "345000",
      "categories": "Đồ nữ, quần short nữ , quần short jean nữ",
      "imglink": "women/32.jpg",
      "colors": "light blue, blue",
      "subimglink": "women/32-a.jpg, women/32-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "108",
      "name": "Shorts jean nữ - 10203",
      "price": "330000",
      "categories": "Đồ nữ, quần short nữ , quần short jean nữ",
      "imglink": "women/33.jpg",
      "colors": "black, light blue, blue",
      "subimglink": "women/33-a.jpg, women/33-b.jpg, women/33-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "109",
      "name": "Shorts jean nữ rách - 10202",
      "price": "330000",
      "categories": "Đồ nữ, quần short nữ , quần short jean nữ",
      "imglink": "women/34.jpg",
      "colors": "black, blue",
      "subimglink": "women/34-a.jpg, women/34-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "110",
      "name": "Shorts jean nữ - 10201",
      "price": "330000",
      "categories": "Đồ nữ, quần short nữ , quần short jean nữ",
      "imglink": "women/35.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M, L"
  },
  {
      "id": "111",
      "name": "Quần short W2SJN06204FBGTR",
      "price": "325000",
      "categories": "Đồ nữ, quần short nữ , quần short jean nữ",
      "imglink": "women/36.jpg",
      "colors": "light blue, blue",
      "subimglink": "women/36-a.jpg, women/36-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "112",
      "name": "Quần short W2SJN06203FBGTR",
      "price": "325000",
      "categories": "Đồ nữ, quần short nữ , quần short jean nữ",
      "imglink": "women/37.jpg",
      "colors": "black, blue",
      "subimglink": "women/37-a.jpg, women/37-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "113",
      "name": "Quần short W2SJN06202FBGRI",
      "price": "325000",
      "categories": "Đồ nữ, quần short nữ , quần short jean nữ",
      "imglink": "women/38.jpg",
      "colors": "black, light blue",
      "subimglink": "women/38-a.jpg, women/38-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "114",
      "name": "Quần short W2SJN06201FBGTR",
      "price": "325000",
      "categories": "Đồ nữ, quần short nữ , quần short jean nữ",
      "imglink": "women/39.jpg",
      "colors": "light blue, blue",
      "subimglink": "women/39-a.jpg, women/39-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "115",
      "name": "Quần shortW2SJN05202FBGTR",
      "price": "240000",
      "categories": "Đồ nữ, quần short nữ , quần short jean nữ",
      "imglink": "women/40.jpg",
      "colors": "dark grey, blue",
      "subimglink": "women/40-a.jpg, women/40-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "116",
      "name": "Quần jogger W2QJG120002",
      "price": "385000",
      "categories": "Đồ nữ,  quần dài nữ, quần jogger nữ",
      "imglink": "women/41.jpg",
      "colors": "cream, black",
      "subimglink": "women/41-a.jpg, women/41-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "117",
      "name": "Quần jogger W2QJG120001",
      "price": "385000",
      "categories": "Đồ nữ,  quần dài nữ, quần jogger nữ",
      "imglink": "women/42.jpg",
      "colors": "black",
      "subimglink": "women/42-a.jpg",
      "size": "S, M, L"
  },
  {
      "id": "118",
      "name": "Quần jean nữ  - Straight - 10203",
      "price": "425000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean đơn giản nữ",
      "imglink": "women/43.jpg",
      "colors": "black, light blue, blue",
      "subimglink": "women/43-a.jpg, women/43-b.jpg, women/43-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "119",
      "name": "Quần jean nữ - Slimfit - 10201",
      "price": "425000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean đơn giản nữ",
      "imglink": "women/44.jpg",
      "colors": "grey, light blue, blue",
      "subimglink": "women/44-a.jpg, women/44-b.jpg, women/44-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "120",
      "name": "Quần jean W2QJN06205FBGTR",
      "price": "450000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean đơn giản nữ",
      "imglink": "women/45.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M, L"
  },
  {
      "id": "121",
      "name": "Quần jean W2QJN06203FBGTR",
      "price": "450000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean đơn giản nữ",
      "imglink": "women/46.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M"
  },
  {
      "id": "122",
      "name": "Quần jean W2QJN06202FBGTR",
      "price": "450000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean đơn giản nữ",
      "imglink": "women/47.jpg",
      "colors": "light blue, blue",
      "subimglink": "women/47-a.jpg, women/47-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "123",
      "name": "Quần jean W2QJN06201FBGTR",
      "price": "450000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean đơn giản nữ",
      "imglink": "women/48.jpg",
      "colors": "light blue, blue",
      "subimglink": "women/48-a.jpg, women/48-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "124",
      "name": "Quần jean W2QJN05206FBGTR",
      "price": "315000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean đơn giản nữ",
      "imglink": "women/49.jpg",
      "colors": "blue",
      "subimglink": "women/49-a.jpg",
      "size": "S, M, L"
  },
  {
      "id": "125",
      "name": "Quần jean W2QJN05204FBGTR",
      "price": "425000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean đơn giản nữ",
      "imglink": "women/50.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M, L"
  },
  {
      "id": "126",
      "name": "Quần jean W2QJN05203FBGTR",
      "price": "440000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean đơn giản nữ",
      "imglink": "women/51.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M, L"
  },
  {
      "id": "127",
      "name": "Quần jean W2QJN05202FBGTR",
      "price": "440000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean đơn giản nữ",
      "imglink": "women/52.jpg",
      "colors": "blue",
      "subimglink": "women/52-a.jpg",
      "size": "S, M, L"
  },
  {
      "id": "128",
      "name": "Quần jean nữ rách - Straight - 10202",
      "price": "425000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean cá tính nữ",
      "imglink": "women/53.jpg",
      "colors": "light blue, blue",
      "subimglink": "women/53-a.jpg, women/53-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "129",
      "name": "Quần jean W2QJN06204FBGRN",
      "price": "450000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean cá tính nữ",
      "imglink": "women/54.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M"
  },
  {
      "id": "130",
      "name": "Quần jean W2QJN05205FBGRN",
      "price": "295000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean cá tính nữ",
      "imglink": "women/55.jpg",
      "colors": "blue",
      "subimglink": "women/55-a.jpg",
      "size": "S, M, L"
  },
  {
      "id": "131",
      "name": "Quần jean W2QJN04208FBGTR",
      "price": "325000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean cá tính nữ",
      "imglink": "women/56.jpg",
      "colors": "blue",
      "subimglink": "women/56-a.jpg",
      "size": "S, M, L"
  },
  {
      "id": "132",
      "name": "Quần jean W2QJN04207FBGTR",
      "price": "315000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean cá tính nữ",
      "imglink": "women/57.jpg",
      "colors": "blue",
      "subimglink": "women/57-a.jpg",
      "size": "S, M, L"
  },
  {
      "id": "133",
      "name": "Quần jean W2QJN04205FSFTR",
      "price": "360000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean cá tính nữ",
      "imglink": "women/58.jpg",
      "colors": "blue",
      "subimglink": "women/58-a.jpg",
      "size": "S, M, L"
  },
  {
      "id": "134",
      "name": "Quần jean W2QJN01202FSFRI",
      "price": "440000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean cá tính nữ",
      "imglink": "women/59.jpg",
      "colors": "blue",
      "subimglink": "women/59-a.jpg",
      "size": "26, 27, 28, 29"
  },
  {
      "id": "135",
      "name": "Quần jean W1QJN01201FBGRI",
      "price": "325000",
      "categories": "Đồ nữ,  quần dài nữ, quần jean cá tính nữ",
      "imglink": "women/60.jpg",
      "colors": "",
      "subimglink": "",
      "size": "26, 27, 28, 29"
  },
  {
      "id": "136",
      "name": "Chân váy jean nữ - 10201",
      "price": "345000",
      "categories": "Đồ nữ , chân váy",
      "imglink": "women/61.jpg",
      "colors": "black, brown, white",
      "subimglink": "women/61-a.jpg, women/61-b.jpg, women/61-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "137",
      "name": "Chân váy W2CNV06203FOSXL",
      "price": "215000",
      "categories": "Đồ nữ , chân váy",
      "imglink": "women/62.jpg",
      "colors": "black, blue, pink, white",
      "subimglink": "women/62-a.jpg, women/62-b.jpg, women/62-c.jpg, women/62-d.jpg",
      "size": "S, M, L"
  },
  {
      "id": "138",
      "name": "Chân váy W2CNV06202FOSXL",
      "price": "215000",
      "categories": "Đồ nữ , chân váy",
      "imglink": "women/63.jpg",
      "colors": "orange, beige, cream, black, pink ",
      "subimglink": "women/63-a.jpg, women/63-b.jpg, women/63-c.jpg, women/63-d.jpg, women/63-e.jpg",
      "size": "S, M, L"
  },
  {
      "id": "139",
      "name": "Chân váy W2CNV06201FOSCR",
      "price": "220000",
      "categories": "Đồ nữ , chân váy",
      "imglink": "women/64.jpg",
      "colors": "cream, black, brown",
      "subimglink": "women/64-a.jpg, women/64-b.jpg, women/64-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "140",
      "name": "Chân váy W2CDV03201FOSXL",
      "price": "240000",
      "categories": "Đồ nữ , chân váy",
      "imglink": "women/65.jpg",
      "colors": "cream, black",
      "subimglink": "women/65-a.jpg, women/65-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "141",
      "name": "Chân váy W2CHV12103FSFTR",
      "price": "235000",
      "categories": "Đồ nữ , chân váy",
      "imglink": "women/66.jpg",
      "colors": "cream, black, brown",
      "subimglink": "women/66-a.jpg, women/66-b.jpg, women/66-c.jpg",
      "size": "S, M, L"
  },
  {
      "id": "142",
      "name": "Chân váy W2CHV12102FSFXL",
      "price": "225000",
      "categories": "Đồ nữ , chân váy",
      "imglink": "women/67.jpg",
      "colors": "cream, pink ",
      "subimglink": "women/67-a.jpg, women/67-b.jpg",
      "size": "S, M, L"
  },
  {
      "id": "143",
      "name": "Chân váy W2CHV2011004",
      "price": "225000",
      "categories": "Đồ nữ , chân váy",
      "imglink": "women/68.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M, L"
  },
  {
      "id": "144",
      "name": "Chân váy W2CHV2011003",
      "price": "225000",
      "categories": "Đồ nữ , chân váy",
      "imglink": "women/69.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M, L"
  },
  {
      "id": "145",
      "name": "Chân váy W2CHV2011002",
      "price": "195000",
      "categories": "Đồ nữ , chân váy",
      "imglink": "women/70.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M"
  },
  {
      "id": "146",
      "name": "Chân váy W2CHV070001",
      "price": "235000",
      "categories": "Đồ nữ , chân váy",
      "imglink": "women/71.jpg",
      "colors": "brown, white",
      "subimglink": "women/70-a.jpg, women/70-b.jpg",
      "size": "S, M"
  },
  {
      "id": "147",
      "name": "Yếm W2YEM2011005",
      "price": "340000",
      "categories": "Đồ nữ , yếm",
      "imglink": "women/72.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S"
  },
  {
      "id": "148",
      "name": "Yếm W2YEM2011004",
      "price": "415000",
      "categories": "Đồ nữ , yếm",
      "imglink": "women/73.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M"
  },
  {
      "id": "149",
      "name": "Yếm W2YEM2011002",
      "price": "415000",
      "categories": "Đồ nữ , yếm",
      "imglink": "women/74.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S"
  },
  {
      "id": "150",
      "name": "Yếm W2YEM2011001",
      "price": "415000",
      "categories": "Đồ nữ , yếm",
      "imglink": "women/75.jpg",
      "colors": "",
      "subimglink": "",
      "size": "S, M, L"
  }
]`);
  var listItems = document.querySelector('#products');
  function initRender() {
    var listProducts = object.map(function (element) {
      return `<div class="col-lg-4 col-md-6 col-12 mb-20 blogBox moreBox" style="margin-bottom: 20px; display:none">
                    <a href="./ProductDetail.html" class="product__new-item">
                        <div class="card" style="width: 100%">
                        <div>
                            <img class="card-img-top" src="./assets/imgProduct/images/${element.imglink}" alt="Card image cap">
                            <form action="" class="hover-icon hidden-sm hidden-xs">
                            <input type="hidden">
                            <a href="./pay.html" class="btn-add-to-cart" title="Mua ngay">
                                <i class="fas fa-cart-plus"></i>
                            </a>
                            <a href="./cart.html" class="btn-add-to-cart" title="Đưa vào trang ưu thích" style="margin-top: 10px">
                                <i class="fas fa-heart"></i>
                            </a>
                            <a data-toggle="modal" data-target="#myModal" class="quickview" title="Xem nhanh">
                                <i class="fas fa-search"></i>
                            </a>
                            </form>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title custom__name-product">
                            ${element.name}
                            </h5>
                            <div class="product__price">
                            <p class="card-text price-color product__price-old">1,000,000 đ</p>
                            <p class="card-text price-color product__price-new">${element.price} đ</p>
                            </div>
                            <div class="home-product-item__action">
                            <span class="home-product-item__like home-product-item__like--liked">
                                <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                            </span>
                            <div class="home-product-item__rating">
                                <i class="home-product-item__star--gold fas fa-star"></i>
                                <i class="home-product-item__star--gold fas fa-star"></i>
                                <i class="home-product-item__star--gold fas fa-star"></i>
                                <i class="home-product-item__star--gold fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="home-product-item__sold">79 đã bán</span>
                            </div>
                            <div class="sale-off">
                            <span class="sale-off-percent">20%</span>
                            <span class="sale-off-label">GIẢM</span>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>`
    });
    var renderList = listProducts.join('');
    listItems.innerHTML = renderList;
  };
  function defaultLoadmore() {
    $(".moreBox").slice(0, 6).show();
    $("#loadMore").click(function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 6).show();
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
  }
  initRender();
  defaultLoadmore();
  function getKhoangGia(kg1, kg2) {
    var listProducts = object.map(function (element) {
      if (element.price >= kg1 && element.price <= kg2) {
        return `<div class="col-lg-4 col-md-6 col-12 mb-20 blogBox moreBox" style="margin-bottom: 20px; display:none">
                <a href="./ProductDetail.html" class="product__new-item">
                  <div class="card" style="width: 100%">
                    <div>
                      <img class="card-img-top" src="./assets/imgProduct/images/${element.imglink}" alt="Card image cap">
                      <form action="" class="hover-icon hidden-sm hidden-xs">
                        <input type="hidden">
                        <a href="./pay.html" class="btn-add-to-cart" title="Mua ngay">
                          <i class="fas fa-cart-plus"></i>
                        </a>
                        <a href="./cart.html" class="btn-add-to-cart" title="Đưa vào trang ưu thích" style="margin-top: 10px">
                                <i class="fas fa-heart"></i>
                        </a>
                        <a data-toggle="modal" data-target="#myModal" class="quickview" title="Xem nhanh">
                          <i class="fas fa-search"></i>
                        </a>
                      </form>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title custom__name-product">
                        ${element.name}
                      </h5>
                      <div class="product__price">
                        <p class="card-text price-color product__price-old">1,000,000 đ</p>
                        <p class="card-text price-color product__price-new">${element.price} đ</p>
                      </div>
                      <div class="home-product-item__action">
                        <span class="home-product-item__like home-product-item__like--liked">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div class="home-product-item__rating">
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="home-product-item__sold">79 đã bán</span>
                      </div>
                      <div class="sale-off">
                        <span class="sale-off-percent">20%</span>
                        <span class="sale-off-label">GIẢM</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>`
      }
    })
    var renderList = listProducts.join('');
    listItems.innerHTML = renderList;
  }
  //lấy dữ liệu của khoảng giá
  $('.checkGia').click(function () {
    $("#loadMore").show();
    var value = $(this).attr('value');
    if (value != '-1') {
      getKhoangGia(value.slice(value, value.indexOf('-')), value.slice(value.indexOf('-') + 1));
    } else {
      initRender();
    }
    $(".moreBox").slice(0, 6).show();
  })
  function getSize(idsize) {
    var listProducts = object.map(function (element) {
      if (element.size.indexOf(idsize) !== -1) {
        return `<div class="col-lg-4 col-md-6 col-12 mb-20 blogBox moreBox" style="margin-bottom: 20px; display:none">
                  <a href="./ProductDetail.html" class="product__new-item">
                    <div class="card" style="width: 100%">
                      <div>
                        <img class="card-img-top" src="./assets/imgProduct/images/${element.imglink}" alt="Card image cap">
                        <form action="" class="hover-icon hidden-sm hidden-xs">
                          <input type="hidden">
                          <a href="./pay.html" class="btn-add-to-cart" title="Mua ngay">
                            <i class="fas fa-cart-plus"></i>
                          </a>
                          <a href="./cart.html" class="btn-add-to-cart" title="Đưa vào trang ưu thích" style="margin-top: 10px">
                                <i class="fas fa-heart"></i>
                          </a>
                          <a data-toggle="modal" data-target="#myModal" class="quickview" title="Xem nhanh">
                            <i class="fas fa-search"></i>
                          </a>
                        </form>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title custom__name-product">
                          ${element.name}
                        </h5>
                        <div class="product__price">
                          <p class="card-text price-color product__price-old">1,000,000 đ</p>
                          <p class="card-text price-color product__price-new">${element.price} đ</p>
                        </div>
                        <div class="home-product-item__action">
                          <span class="home-product-item__like home-product-item__like--liked">
                              <i class="home-product-item__like-icon-empty far fa-heart"></i>
                              <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                          </span>
                          <div class="home-product-item__rating">
                              <i class="home-product-item__star--gold fas fa-star"></i>
                              <i class="home-product-item__star--gold fas fa-star"></i>
                              <i class="home-product-item__star--gold fas fa-star"></i>
                              <i class="home-product-item__star--gold fas fa-star"></i>
                              <i class="fas fa-star"></i>
                          </div>
                          <span class="home-product-item__sold">79 đã bán</span>
                        </div>
                        <div class="sale-off">
                          <span class="sale-off-percent">20%</span>
                          <span class="sale-off-label">GIẢM</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>`
      }
    });
    var renderList = listProducts.join('');
    listItems.innerHTML = renderList;
  }
  function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
      what = a[--L];
      while ((ax = arr.indexOf(what)) !== -1) {
        arr.splice(ax, 1);
      }
    }
    return arr;
  }
  var check = [];
  $('.checksize').click(function () {
    $("#loadMore").show();
    var id = $(this).attr('id');
    var size = $(`#${id}`).parent().find("span").text();
    if (check.includes(size)) {
      removeA(check, size);
    } else {
      check.push(size);
    }
    if (check.length !== 0) {
      check.forEach(element => {
        getSize(element);
      });
    } else {
      initRender();
    }
    $(".moreBox").slice(0, 6).show();
  })
  function getSapXep(idSort) {
    switch (idSort) {
      case "sort1":
        object.sort(function (a, b) {
          return a.price - b.price;
        });
        break;
      case "sort2":
        object.sort(function (a, b) {
          return b.price - a.price;
        });
        break;
      case "sort3":
        object.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
        break;
      case "sort4":
        object.sort(function (a, b) {
          return b.name.localeCompare(a.name);
        });
        break;
      case "sort5":
        // code block
        break;
      case "sort6":
        // code block
        break;
      case "sort7":
        // code block
        break;
      case "sort0":
        break;
    }
    var listProducts = object.map(function (element) {
      return `<div class="col-lg-4 col-md-6 col-12 mb-20" style="margin-bottom: 20px">
                <a href="./ProductDetail.html" class="product__new-item">
                  <div class="card" style="width: 100%">
                    <div>
                      <img class="card-img-top" src="./assets/imgProduct/images/${element.imglink}" alt="Card image cap">
                      <form action="" class="hover-icon hidden-sm hidden-xs">
                      <input type="hidden">
                      <a href="./pay.html" class="btn-add-to-cart" title="Mua ngay">
                        <i class="fas fa-cart-plus"></i>
                      </a>
                      <a href="./cart.html" class="btn-add-to-cart" title="Đưa vào trang ưu thích" style="margin-top: 10px">
                                <i class="fas fa-heart"></i>
                      </a>
                      <a data-toggle="modal" data-target="#myModal" class="quickview" title="Xem nhanh">
                        <i class="fas fa-search"></i>
                      </a>
                    </form>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title custom__name-product">
                        ${element.name}
                      </h5>
                      <div class="product__price">
                        <p class="card-text price-color product__price-old">1,000,000 đ</p>
                        <p class="card-text price-color product__price-new">${element.price} đ</p>
                      </div>
                      <div class="home-product-item__action">
                        <span class="home-product-item__like home-product-item__like--liked">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div class="home-product-item__rating">
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="home-product-item__sold">79 đã bán</span>
                      </div>
                      <div class="sale-off">
                        <span class="sale-off-percent">20%</span>
                        <span class="sale-off-label">GIẢM</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>`
    })
    var renderList = listProducts.join('');
    listItems.innerHTML = renderList;
  }
  $('.dropdown-item').click(function () {
    var idSort = $(this).attr('id');
    getSapXep(idSort);
  })
});
