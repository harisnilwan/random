function randomAds(){
//ONE
   var myRandom1=Math.round(Math.random()*2) //angka 2 disesuaikan dengan jumlah link
  var aLink1=new Array()
 aLink1[0]="halaman-1-1.html"
 aLink1[1]="halaman-1-2.html"
 aLink1[2]="halaman-1-3.html"
  var aText1="<span class='circle'><i class='fa fa-rocket'></i></span> <span class='title'>Demo</span> <span class='title-hover'>Click here</span>"
 //TWO
$("#tempat-link").html("<a class='btn-slide' href='"+aLink1[myRandom1]+"'>"+aText1+"</a>")
};
</script>
<script>
$(document).ready(function(){
 $("#tempat-link").html(randomAds);
});
