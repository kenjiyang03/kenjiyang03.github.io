function redirect() {
    var textValue = document.getElementById("textBox").value;
    if(textValue == "M19001")
    {
        location.href = "registrationpage.html";
    }
    else if(textValue == "P20001")
    {
        location.href = "CovidStats.html";
    }
    else
    {
        alert("Invalid Input");
    }
}




$("#registerBtn1").submit(function(e){
    $('#registration-centre').modal('show');
    return false;
});

$("#registerBtn2").submit(function(e){
    $('#registration-officer').modal('show');
    return false;
});

$("#registerBtn3").submit(function(e){
    $('#stock-modal').modal('show');
    return false;
});

$(document).ready(function($)
      {
        //ajax row data
        var ajax_data =
        [
          {CentreName:"Prince Court Medical Centre", Address:"39, Jalan Kia Peng", City:"Kuala Lumpur", State:"Wilayah Persekutuan", Postcode:"50450"}, 
          {CentreName:"Mediviron Clinic", Address:"169 Jalan Sarjana", City:"Kuala Lumpur", State:"Wilayah Persekutuan", Postcode:"56000"},
          {CentreName:"Hibari Clinic", Address:"Suite No. 3.1, Level 3, Menara IMC", City:"Kuala Lumpur", State:"Wilayah Persekutuan", Postcode:"50250"},
          {CentreName:"Impian Emas Medical Centre", Address:"No. 44, Jalan Impian Emas 7 Taman Impian Emas Skudai", City:"Johor Bahru", State:"Johor", Postcode:"81300"},
          {CentreName:"Kempas Medical Centre", Address:"Lot PTD, 7522, Jalan Kempas Baru", City:"Johor Bahru", State:"Johor", Postcode:" 81200"},
          {CentreName:"TCM Medical Center", Address:"78, Jalan Serampang, Taman Pelangi", City:"Johor Bahru", State:"Johor", Postcode:"80400"},
          {CentreName:"Mahkota Medical Centre", Address:"No 3, Mahkota Melaka", City:"Jln Merdeka", State:"Melaka", Postcode:"75000"},
          {CentreName:"Wellness Laboratories Centre", Address:"No 242, Jalan Melaka Raya 1", City:"Taman Melaka Raya", State:"Melaka", Postcode:"75000"},
          {CentreName:"Georgetown Specialist Hospital", Address:"12A, Jln Masjid Negeri", City:"George Town", State:"Penang", Postcode:"11600"},
          {CentreName:"The Pearl Clinic", Address:" 99, Lebuh King, George Town", City:" George Town", State:"Penang", Postcode:"10200"},
          {CentreName:"Tanjung Medical Centre", Address:" 473, Jalan Burma, George Town", City:"George Town", State:"Penang", Postcode:"10350"},
          {CentreName:"Kedah Medical Centre", Address:"Mukim Alor Merah, Jalan, Kampung Pumpong", City:"Alor Setar", State:"Kedah", Postcode:"05250"},
          {CentreName:"Putra Medical Centre", Address:"888, Jalan Sekerat, Off, Jalan Putra", City:"Alor Setar", State:"Kedah", Postcode:"05100"},
          {CentreName:"Sunway Medical Centre", Address:"5, Jalan Lagoon Selatan, Bandar Sunway", City:"Petaling Jaya", State:"Selangor", Postcode:"47500"},
          {CentreName:"Normah Sarawak Medical Centre", Address:"Lot 937, Section 30 KTLD, Jalan Tun Abdul Rahman, Petra Jaya", City:"Kuching", State:"Sarawak", Postcode:"93050"},
          {CentreName:"Rejang Medical Centre", Address:"No. 23, 35, Jalan Dr. Wong Soon Kai, Pekan Sibu", City:" Sibu", State:"Sarawak", Postcode:"96000"},
          {CentreName:"Borneo Medical Centre", Address:"Lot 1959, Block 10 MCLD, Jalan Cahaya, Off, Bintulu - Miri Rd", City:"Miri", State:"Sarawak", Postcode:"98000"},
          {CentreName:"Jesselton Medical Centre", Address:"Jalan Metro 2, Off, Jalan Tuaran, Jalan Bunga Ulam Raja", City:"Kota Kinabalu", State:"Sabah", Postcode:"88300"},
          {CentreName:"Rafflesia Medical Centre", Address:" Lots 5-8, Millennium Commercial Centre, Jalan Lintas, Kepayan Penampang", City:"Kota Kinabalu", State:"Sabah", Postcode:"88200"},
          {CentreName:"Perak Medical Centre", Address:"285, Jalan Silibin, Taman Alkaff", City:"Ipoh", State:"Perak", Postcode:"30100"},
          {CentreName:"Kangar Health Clinic", Address:" Pusat Bandar Kangar", City:" Kangar", State:"Perlis", Postcode:"01000"},
          {CentreName:"Pahang Medical Centre", Address:" Lot 1, Wisma Muip, Jalan Gambut", City:"Kuantan", State:"Pahang", Postcode:"25000"},
          {CentreName:"Kuala Terengganu Specialist Hospital", Address:" Lot 3963, Jalan Sultan Mahmud", City:" Kuala Terengganu", State:"Terengganu", Postcode:"20400"},
          {CentreName:"Kota Bharu Medical Centre", Address:"PT 179, 184, Jalan Sultan Yahya Petra, Taman Aman", City:"Kota Bharu", State:"Kelantan", Postcode:" 15200"},
          {CentreName:"NSCMH Medical Centre", Address:"Jln Tun Dr. Ismail", City:"Seremban", State:"Negeri Sembilan", Postcode:"70200"},
          {CentreName:"Nilai Medical Centre", Address:"PT 13717 Jalan BBN 2/1, Bandar Baru Nilai", City:"Nilai", State:"Negeri Sembilan", Postcode:"71800"},
        ]
    
        //--->convert it into datatable arrays > start
        var data_table_arr = []
        $.each(ajax_data, function(index, val) 
        {
          data_table_arr.push([
            val.CentreName,
            val.Address,
            val.City,
            val.State,
            val.Postcode
          ])
           
        });
        //--->convert it into datatable arrays > end
    
     
         //id of your datatable you want populate rows for
          $('#centre-table').DataTable( 
          {
            data: data_table_arr,
            "lengthMenu": [ [10,25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
          "pageLength":10,
            columns: [
            { title: "CentreName" },
            { title: "Address" },				 
            { title: "City" },
            { title: "State"},
            { title: "Postcode"}			 
          ],    	       
          } );
        
      }); 

      $(document).ready(function($)
      {
        //ajax row data
        var ajax_data =
        [
          {Username:"M19001", Password:"********", FirstName:"Kenji", LastName:"Yang", Position:"Test Centre Manager"}, 
          {Username:"M19002", Password:"******", FirstName:"Muhammad", LastName:"Siddiq", Position:"Test Centre Manager"}, 
          {Username:"M19003", Password:"*********", FirstName:"Munavar", LastName:"Shafiq", Position:"Test Centre Manager"}, 
          {Username:"M19004", Password:"*******", FirstName:"Liyana", LastName:"Amirah", Position:"Test Centre Manager"}, 
          {Username:"M19005", Password:"********", FirstName:"Chai Jun", LastName:"Man", Position:"Test Centre Manager"}, 
          {Username:"M19006", Password:"*********", FirstName:"Jabez", LastName:"Chin", Position:"Test Centre Manager"}, 
          {Username:"M19007", Password:"*******", FirstName:"Naoya", LastName:"Tabata", Position:"Test Centre Manager"}, 
          {Username:"M19008", Password:"******", FirstName:"Kinson", LastName:"Yong", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M19009", Password:"*********", FirstName:"Ivan", LastName:"Lim", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M19010", Password:"******", FirstName:"Marco", LastName:"Chong", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M20001", Password:"*********", FirstName:"Sujhesen", LastName:"Raj", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M20002", Password:"*******", FirstName:"Haziq", LastName:"Jazli", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M20003", Password:"******", FirstName:"Ken Loong", LastName:"Lee", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M20004", Password:"*********", FirstName:"Wilson", LastName:"Lee", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M20005", Password:"******", FirstName:"Kabilesh", LastName:"Jana", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M20006", Password:"********", FirstName:"Lavi", LastName:"Surarikne", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M20007", Password:"******", FirstName:"Mickey", LastName:"Chong", Position:"Test Centre Manager"}, 
          {Username:"M20008", Password:"*********", FirstName:"Phyllis", LastName:"Lim", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M20009", Password:"*******", FirstName:"Jason", LastName:"Choong", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M20010", Password:"******", FirstName:"Tennis", LastName:"Cheah", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M18001", Password:"********", FirstName:"Kelvin", LastName:"Ng", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M18002", Password:"*********", FirstName:"Eric", LastName:"Lee", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M18003", Password:"*******", FirstName:"Raja", LastName:"Hazman", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M18004", Password:"*****", FirstName:"Grace", LastName:"Lee", Position:"Test Centre Officer (Tester)"}, 
          {Username:"M18005", Password:"*******", FirstName:"Hasya", LastName:"Aqilah", Position:"Test Centre Officer (Tester)"}, 
        ]
    
        //--->convert it into datatable arrays > start
        var data_table_arr = []
        $.each(ajax_data, function(index, val) 
        {
          data_table_arr.push([
            val.Username,
            val.Password,
            val.FirstName,
            val.LastName,
            val.Position
          ])
           
        });
        //--->convert it into datatable arrays > end
    
     
         //id of your datatable you want populate rows for
          $('#officerdatatable').DataTable( 
          {
            data: data_table_arr,
            "lengthMenu": [ [10,25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
          "pageLength":10,
            columns: [
            { title: "Username" },
            { title: "Password" },				 
            { title: "FirstName" },
            { title: "LastName"},
            { title: "Position"}			 
          ],    	       
          } );
      }); 

      $(document).ready(function($)
      {
        //ajax row data
        var ajax_data =
        [
          {kitID:"K001", ItemName:"InBios Smart Detect SARS-CoV-2 rRT-PCR Kit", Amount:"30"},
          {kitID:"K002", ItemName:"Gnomegen COVID-19 RT-Digital PCR Detection Kit", Amount:"10"},  
          {kitID:"K003", ItemName:"CO-DIAGNOSTICS INC.Logix Smart Coronavirus 2019 (COVID-19) Kit", Amount:"15"}, 
          {kitID:"K004", ItemName:"ScienCell SARS-CoV-2 Coronavirus Detection Kit", Amount:"17"}, 
          {kitID:"K005", ItemName:"Luminex ARIES SARS-CoV-2 Assay", Amount:"22"}, 
          {kitID:"K006", ItemName:"Luminex NxTAG® CoV Extended Panel", Amount:"10"}, 
          {kitID:"K007", ItemName:"BD BioGX SARS-CoV-2 Reagents for the BD MAX™ System", Amount:"21"}, 
          {kitID:"K008", ItemName:"BD SARS-CoV-2 Reagents for the BD MAX™ System", Amount:"18"}, 
          {kitID:"K009", ItemName:"Ipsum Diagnostics COV-19 IDx Assay", Amount:"29"}, 
          {kitID:"K010", ItemName:"Cellex qSARS-CoV-2 IgG/IgM Rapid Test", Amount:"18"}, 
          {kitID:"K011", ItemName:"QIAGEN QIAstat-Dx Respiratory SARS-CoV-2 Panel", Amount:"27"}, 
          {kitID:"K012", ItemName:"NeuMoDx Molecular™ SARS-CoV-2 Assay", Amount:"16"}, 
          {kitID:"K013", ItemName:"Abbot ID NOW™ COVID-19 Assay", Amount:"22"}, 
          {kitID:"K014", ItemName:"BGI Genomics Real-Time Fluorescent RT-PCR Kit", Amount:"10"}, 
          {kitID:"K015", ItemName:"Avellino CoV-2 Test", Amount:"11"}, 
          {kitID:"K016", ItemName:"PerkinElmer New Coronavirus Nucleic Acid Detection Kit", Amount:"16"}, 
          {kitID:"K017", ItemName:"Mesa Biotech Accula™ SARS-Cov-2 Test", Amount:"7"}, 
          {kitID:"K018", ItemName:"BioFire Diagnostics BioFire® COVID-19 Test", Amount:"16"}, 
          {kitID:"K019", ItemName:"Cepheid Xpert® Xpress SARS-CoV-2 Test", Amount:"5"}, 
          {kitID:"K020", ItemName:"Primerdesign Ltd. COVID-19 genesig Assay", Amount:"8"}, 
          {kitID:"K021", ItemName:"GenMark Diagnostics ePlex® SARS-CoV-2 Test ", Amount:"3"}, 
          {kitID:"K022", ItemName:"DiaSorin Molecular Simplexa® COVID-19 Direct Assay", Amount:"17"}, 
          {kitID:"K023", ItemName:"Abbott RealTime SARS-CoV-2 Assay", Amount:"20"}, 
          {kitID:"K024", ItemName:"QuestDiagnostics SARS Coronavirus With CoV-2 RNA Test", Amount:"10"}, 
          {kitID:"K025", ItemName:"Quidel Lyra SARS-CoV-2 Assay", Amount:"30"}, 
        ]
    
        //--->convert it into datatable arrays > start
        var data_table_arr = []
        $.each(ajax_data, function(index, val) 
        {
          data_table_arr.push([
            val.kitID,
            val.ItemName,
            val.Amount,
          ])
           
        });
        //--->convert it into datatable arrays > end
    
     
         //id of your datatable you want populate rows for
          $('#stockDatatable').DataTable( 
          {
            data: data_table_arr,
            "lengthMenu": [ [10,25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
          "pageLength":10,
            columns: [
            { title: "kitID" },
            { title: "Item Name" },				 
            { title: "Amount" }			 
          ],    	       
          } );
        
      }); 

function confirmpopup()
{
    var c=confirm("Do you wish to continue?")
    if(c==true)
    location.href="index.html"
    else
    alert("You pressed cancel")
}