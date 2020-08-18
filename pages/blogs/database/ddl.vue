<template>
  <div class="outer">
    <div id="nav">
      <button @click="() => {this.$router.push('/')}" class="text-dark nav-logo text-uppercase font-weight-bold">back</button>
    </div>
    <div class="blog">
      <div id="blogtitle">
        <h4 class="text-center font-weight-bold">Data Definition Language</h4>
      </div>
      <div class="blogcontent container">
        <ol class="text-justify list-upper-alpha">
          <li class="font-weight-bold">CREATE</li>
          <div>Sesuai namanya, CREATE digunakan untuk membuat sesuatu. Dengan syntax CREATE ini kita dapat membuat database, table, dan lain – lain. Untuk membuat database, kita dapat mengikuti format berikut:</div>
          <pre class="query">CREATE DATABASE [nama_database]</pre>
          <div>Contohnya, kita ingin membuat database dengan nama DaResto:</div>
          <pre class="query">CREATE DATABASE DaResto</pre>
          <div>Untuk membuat table, kita dapat mengikuti format berikut:</div>
          <pre class="query">CREATE TABLE [nama_table] (
            [nama_kolom1] [tipe_data1] [opsi_lain],
            [nama_kolom2] [tipe_data2] [opsi_lain]
)</pre>
          <div>Contohnya, kita ingin membuat table dengan nama MsCustomer dengan kolom sebagai berikut:</div>
          <ul>
            <li>CustomerId dengan tipe data CHAR(5)</li>
            <li>CustomerName dengan tipe data VARCHAR(30)</li>
            <li>CustomerEmail dengan tipe data VARCHAR(30)</li>
            <li>CustomerGender dengan tipe data VARCHAR(10)</li>
          </ul>
          <div>Maka kita dapat membuatnya seperti dibawah ini:</div>
          <pre class="query">CREATE TABLE MsCustomer (
            CustomerId CHAR(5),
            CustomerName VARCHAR(30),
            CustomerEmail VARCHAR(30),
            CustomerGender VARCHAR(10)
)</pre>
          <div>Bagaimana dengan opsi lain? Opsi lain akan dijelaskan di bawah ini:</div>
          <ul>
            <li class="font-weight-bold">Primary Key</li>
            <div>Untuk membuat primary key, kita tinggal menambahkan PRIMARY KEY di sebelah kolom yang ingin kita jadikan primary key. Contohnya:</div>
            <pre class="query">CustomerId CHAR(5) PRIMARY KEY</pre>
            
            <li class="font-weight-bold">Foreign Key & References</li>
            <div>Untuk membuat foreign key, kita tinggal menambahkan FOREIGN KEY di sebelah kolom yang ingin kita jadikan foreign key, lalu menambahkan REFERENCES [nama_table]([nama_kolom]).</div>
            <div>Misalnya kita mempunyai 2 table, yaitu table MsStaff dan MsStaffPosition:</div>
            <pre class="query">CREATE TABLE MsStaff (
              StaffId CHAR(5) PRIMARY KEY,
              StaffName VARCHAR(30),
              StaffPositionId CHAR(5) FOREIGN KEY REFERENCES MsStaffPosition(StaffPositionId)
)

CREATE TABLE MsStaffPosition (
              StaffPositionId CHAR(5) PRIMARY KEY,
              StaffPositionName VARCHAR(20)
)</pre>
            <div>Dari 2 table diatas kita dapat melihat bahwa pada table MsStaff terdapat kolom StaffPositionId yang berperan sebagai foreign key, lalu foreign key tersebut menunjuk primary key pada table MsStaffPosition. Keyword FOREIGN KEY kita gunakan untuk memberitahu bahwa kolom tersebut merupakan sebuah foreign key, dan keyword REFERENCES kita gunakan untuk memberitahu primary key pada table apa yang ditunjuk oleh foreign key tersebut.</div>

            <li class="font-weight-bold">Not Null</li>
            <div>Sesuai namanya, not null digunakan untuk memberitahu bahwa kolom tersebut tidak boleh kosong (tidak diisi). Untuk membuat sebuah kolom tidak boleh kosong, kita tinggal menambahkan keyword NOT NULL disamping kolom tertentu. Contohnya:</div>
            <pre class="query">CREATE TABLE MsStaffPosition (
              StaffPositionId CHAR(5) PRIMARY KEY,
              StaffPositionName VARCHAR(20) NOT NULL
)</pre>
            <div>Pada table diatas dapat kita lihat bahwa StaffPositionName tidak boleh kosong saat StaffPositionId diisi.</div>
            
            <li class="font-weight-bold">Check</li>
            <div>Sesuai namanya, keyword CHECK digunakan untuk mengecek apakah data pada kolom tersebut sudah sesuai dengan yang kita inginkan atau belum. Misalnya kita ingin kolom CustomerGender pada table MsCustomer hanya boleh diisi Female atau Male saja. Maka kita dapat query seperti dibawah ini:</div>
            <pre class="query">CREATE TABLE MsCustomer (
              CustomerId CHAR(5) PRIMARY KEY,
              CustomerName VARCHAR(30),
              CustomerEmail VARCHAR(30),
              CustomerGender VARCHAR(10) CHECK (CustomerGender = ‘Male’ OR CustomerGender = ‘Female’)
)
</pre>
          <div>Misalnya kita ingin kolom CustomerEmail pada table MsCustomer harus mengikuti format [email]@gmail.com, maka kita dapat query seperti dibawah ini:</div>
          <pre class="query">CREATE TABLE MsCustomer (
            CustomerId CHAR(5) PRIMARY KEY,
            CustomerName VARCHAR(30),
            CustomerEmail VARCHAR(30) CHECK (CustomerEmail LIKE ‘%@gmail.com’),
            CustomerGender VARCHAR(10)
)</pre>
          <div>Misalnya kita ingin kolom CustomerId pada table MsCustomer harus mengikuti format CU[angka][angka][angka], maka kita dapat query seperti dibawah ini:</div>
          <pre class="query">CREATE TABLE MsCustomer (
            CustomerId CHAR(5) PRIMARY KEY CHECK (CustomerId LIKE ‘CU[0-9][0-9][0-9]’),
            CustomerName VARCHAR(30),
            CustomerEmail VARCHAR(30),
            CustomerGender VARCHAR(10)
)</pre>
          <div>Pada query diatas kita dapat melihat jika kita ingin membuat data dari suatu kolom mengikuti format tertentu, maka kita dapat memakai keyword LIKE. Keyword ini digunakan agar kita dapat memberikan format yang kita inginkan sesuai dengan kebutuhan.</div>
          </ul>

          <li class="font-weight-bold">ALTER</li>
          <div>Keyword ALTER digunakan untuk mengubah struktur table yang telah kita buat tanpa menghilangkan data yang sudah tersimpan didalam table tersebut. Misalnya, kita mempunyai table sebagai berikut:</div>
          <pre class="query">CREATE TABLE MsStaff (
            StaffId CHAR(5) PRIMARY KEY,
            StaffName VARCHAR(30)
)</pre>
          <div>Lalu pada table tersebut sudah ada 1000 data staff yang bekerja pada perusahaan kita. Jika sewaktu – waktu, sang mahakuasa bos ingin menambahkan kolom StaffEmail pada table tersebut tanpa menghilangkan 1000 data yang sudah tersimpan, kita dapat menggunakan keyword ALTER.</div>
          <div>Misalnya, kita ingin menambahkan kolom StaffEmail dengan tipe data varchar(30) pada table MsStaff, maka kita dapat query seperti dibawah ini:</div>
          <pre class="query">ALTER TABLE MsStaff ADD StaffEmail VARCHAR(30)</pre>
          <div>Misalnya, kita ingin menambahkan aturan (constraint) pada MsStaff untuk memastikan bahwa StaffEmail harus memiliki @, maka kita dapat query seperti dibawah ini:</div>
          <pre class="query">ALTER TABLE MsStaff ADD CONSTRAINT EmailValidation CHECK(StaffEmail LIKE ‘%@%’)</pre>
          <div>Jika kita ingin menambahkan 2 kolom dan 1 aturan pada table MsStaff maka kita harus mengetikkan query ALTER satu persatu, kita tidak bisa menambahkan semuanya sekaligus.</div>

          <li class="font-weight-bold">DROP</li>
          <div>Keyword drop digunakan untuk menghapus sesuatu. Keyword ini dapat menghapus database, table, dan lain – lain. Untuk menghapus database, kita dapat mengikuti format berikut:</div>
          <pre class="query">DROP DATABASE [nama_database]</pre>
          <div>Contohnya, kita ingin menghapus database DaResto:</div>
          <pre class="query">DROP DATABASE DaResto</pre>
          <div>Untuk menghapus table, kita dapat mengikuti format berikut:</div>
          <pre class="query">DROP TABLE [nama_table]</pre>
          <div>Contohnya, kita ingin menghapus table MsStaffPosition:</div>
          <pre class="query">DROP TABLE MsStaffPosition</pre>
        </ol>
      </div>
    </div>
    <div class="d-flex justify-content-center m-5 font-weight-bold">Selamat Mencoba :) Good Luck!</div>
    <Footer/>
  </div>
</template>

<script>
import { NavBar } from "~/components/NavBar";
import { Footer } from "~/components/Footer";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    icons: 'constants/get',
    skills: 'skills/get',
    works: 'works/get',
    tools: 'tools/get'
  }),

  components:{
    NavBar,
    Footer
  },

  data() {
    return {
      scrollTop: 0,
      showNav: false,
    }
  },

  methods: {
    setNavBar() {
			let nav = document.querySelector('#nav')
			document.documentElement.scrollTop != 0 ? nav.style.background ='#ffd2d2' : this.showNav ? nav.style.background = '#ffd2d2' : nav.style.background = 'transparent'
		},
    scrollHandler() {
      this.setScrollTop()
      this.setNavBar()
    },
    backToTop() {
      document.documentElement.scrollTop = 0;
      this.scrollTop = 0;
    },
    setScrollTop() {
      this.scrollTop = document.documentElement.scrollTop
    },
  },

  mounted() {
    this.backToTop()
    this.setScrollTop()
    window.addEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style>
  .outer{
    width: 100%;
    min-height: 100vh;
    background: rgba(251, 228, 252, 0.5)
  }

  .box-shadow {
    box-shadow: 0px 5px 20px 0px #dddddd;
  }

  #nav{
		display: flex;
		justify-content: space-between;
		padding: 1% 3%;
		position: fixed;
		top: 0;
		z-index: 10000;
		width: 100%;
		transition: all 0.2s ease;
	}

	#nav button{
		padding: 0.5% 2%;
		transition: all 0.2s ease;
	}

	#nav button:hover {
		text-decoration: none;
		background-color: #ffffff;
		border-radius: 8px;
	}

	#nav button:focus, #nav button:active, .v-btn:focus, .v-btn:active {
		outline: none
	}

  .blog {
    padding-top: 15vh;
  }

  #blogtitle > h4 {
    font-size: calc(20px + 0.25rem) !important;
  }

  .list-upper-alpha {
    list-style: upper-alpha;
    list-style-position: inside;
  }

  .query {
    padding: 1%;;
    border: 1px solid black;
    font-weight: bold;
  }

  .blogcontent div {
    margin-top: 1%;
    margin-bottom: 1%;
  }
</style>