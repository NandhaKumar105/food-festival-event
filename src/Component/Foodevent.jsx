import food from '../assets/maaslogo.jpeg'
import { useEffect, useState } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { FaMusic } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import poster1 from '../assets/poster1.png'
import poster2 from '../assets/poster2.png'

function Foodevent() {
  const targetDate = new Date("2025-06-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  // starter 

  const [starter, setstarter] = useState(
    [
      {
        image: "https://images.themodernproper.com/production/posts/2022/Homemade-French-Fries_8.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1662474181&s=15046582e76b761a200998df2dcad0fd",
        name: "French Fries"
      },

      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqTmswFi3QeHHPSPwF2XVWiyhJiNGYeserQ&s",
        name: "Fruit Custard"
      },

      {
        image: "https://5.imimg.com/data5/SELLER/Default/2025/2/487028546/AQ/YY/TY/71197940/roasted-masala-peanuts-500x500.jpeg",
        name: " Curd Peanut Masala"
      }
    ]
  )

  // main course

  const [main, setmain] = useState(
    [
      {
        img: "https://static.vecteezy.com/system/resources/thumbnails/040/703/949/small/ai-generated-royal-feast-master-the-art-of-chicken-biryani-at-home-generative-ai-photo.jpg",
        name: " Traditional Muslim Chicken Biriyani (Wooden Stove)"
      },

      {
        img: "https://static.vecteezy.com/system/resources/thumbnails/040/985/899/small/ai-generated-indian-biryani-rice-professional-advertising-foodgraphy-photo.jpg",
        name: " Traditional Muslim Mutton Biriyani (Wooden Stove)"
      },

      {
        img: "https://i.ytimg.com/vi/zIHohFqZuYM/maxresdefault.jpg",
        name: "Pala Pinju Briyani"
      },

      {
        img: "https://www.jinooskitchen.com/wp-content/uploads/2018/12/mutton-dalcha-jinooskitchen-3-500x375.jpg",
        name: "Brinjal Thalicha"
      },

      {
        img: "https://www.ceepeespices.in/wp-content/uploads/2021/12/recipe-Mixed-Veg-Raita.jpg",
        name: "Mixed Raitha"
      },

      {
        img: "https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-freshly-made-traditional-chapati-with-butter-png-image_13236221.png",
        name: "Butter Chappathi"
      },

      {
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/04/gobi-masala-cauliflower-masala.webp",
        name: "Gopi Gravy"
      },

      {
        img: "https://media.istockphoto.com/id/1205482203/photo/kerala-parotta-popularly-known-as-paratha-or-porotta-is-a-delicacy-from-the-state-of-kerala.jpg?s=612x612&w=0&k=20&c=Yv6GQkzNErLM7NUA4q6S27FnFMT7yuC6RSCij5e2m0Y=",
        name: "Parotta"
      },



      {
        img: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/9-feb/Kumbakonam_Kadappa_Recipe_South_Indian_Style_Lentil_and_Potato_Stew-1_400.jpg",
        name: "Kadappa"
      },

      {
        img: "https://www.thevellorekitchen.in/wp-content/uploads/2023/01/KAADAI-65.jpg",
        name: "Kaadai Roast"
      },
      {
        img: "https://ymcacf.org/wp-content/uploads/2021/08/iStock-155420039-800x533-1.png",
        name: "Boiled Egg"
      },

      {
        img: "https://assets.tendercuts.in/product/M/R/bb8d54f6-5987-4055-b992-19cf8c9fb14c.webp",
        name: "Chicken Chukka"
      },

      {
        img: "https://www.indianveggiedelight.com/wp-content/uploads/2022/12/white-sauce-pasta-featured.jpg",
        name: "White Pastha"
      },

      {
        img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/mushroom-noodles-3.jpg",
        name: "Mushroom Noodles"
      },

      {
        img: "https://www.funfoodfrolic.com/wp-content/uploads/2020/11/Chicken-Chettinad-Thumbnail-300x300.jpg",
        name: "Naatukkozhi Chettinadu"
      },

      {
        img: "https://i.ytimg.com/vi/Wkzq45N8rtU/maxresdefault.jpg",
        name: "Prawn 65"
      },

      {
        img: "https://culinaryginger.com/wp-content/uploads/Grilled-Tandoori-Chicken-Kebabs-4-.jpg",
        name: "Chicken Kebab"
      },

      {
        img: "https://media.istockphoto.com/id/1408056802/photo/fish-sticks-on-a-plate.jpg?s=612x612&w=0&k=20&c=2Caduc4loiVTpBcSPzEnk-K1vxPcSqhV9LT0AFW6c9E=",
        name: "Fish Finger"
      },

      {
        img: "https://images.getrecipekit.com/20230113172320-whiterice.jpg?aspect_ratio=4:3&quality=90&",
        name: "White Rice"
      },

      {
        img: "https://www.kannammacooks.com/wp-content/uploads/2015/12/milagu-rasam-recipe.jpg",
        name: "Milagu Rasam"
      },

    ]
  )

  // sweets

  const [sweet, setsweet] = useState(
    [
      {
        img: "https://www.nestleprofessional.in/sites/default/files/2022-07/Elaneer-Payasam.jpg",
        name: "Elamneer Payasam"
      },

      {
        img: "https://i.ytimg.com/vi/7wNoKZuctJk/sddefault.jpg",
        name: "Vetrilai Payasam"
      },

      {
        img: "https://i.ytimg.com/vi/71CMGXneVnY/maxresdefault.jpg",
        name: "Bread Halwa"
      },

      {
        img: "https://www.crunchykitchen.com/wp-content/uploads/2020/06/ash-gourd-halwa-re.jpg",
        name: "Kasi Halwa"
      },

      {
        img: "https://www.spiceupthecurry.com/wp-content/uploads/2020/08/gulab-jamun-recipe-2.jpg",
        name: "Gulabjamun"
      }



    ]
  )

  // snack

  const [snacks, setsnacks] = useState(
    [
      {
        img: "https://bittmanproject.com/wp-content/uploads/GettyImages-1060532718.jpg",
        name: "PopCorn (Butter, Sweet)"
      },

      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmX9lKrbYajRfbR7IweF8UvoWTvhAueZK5Vg&s",
        name: "Cotton Candy"
      },

      {
        img: "https://cheetah.cherishx.com/uploads/1721369361_large.jpg",
        name: "Chocolate Fountain"
      },

      {
        img: "https://content.jdmagicbox.com/v2/comp/bangalore/b7/080pxx80.xx80.190314072655.x3b7/catalogue/sri-ram-beeda-stall-peenya-bangalore-paan-shops-poo74xfz1t.jpg",
        name: "Beeda"
      }

    ]
  )

  // dessert

  const [dessert, setdessert] = useState(
    [
      {
        img: "https://media.istockphoto.com/id/1311373994/photo/milk-shakes-in-plastic-cups-and-straws-on-a-dark-wooden-table.jpg?s=612x612&w=0&k=20&c=Y20r2W4YwMifHwVxQA8pwx3HTaBnHoBhZmDtSuLGHww=",
        name: "Milk Shake (6 Flavours)"
      },

      {
        img: "https://hips.hearstapps.com/hmg-prod/images/del069924-homemadesoftserve-web-249-jd-index-6670a2cd08f5d.jpg?crop=0.8886845935800198xw:1xh;center,top&resize=1200:",
        name: "Softy Cone"
      },

      {
        img: "https://www.mashed.com/img/gallery/dairy-free-ice-creams-ranked-worst-to-best/intro-1614869901.jpg",
        name: "Hard Ice Cream (6 Flavours)"
      },

      {
        img: "https://bakingamoment.com/wp-content/uploads/2023/07/IMG_2051-ice-cream-cake.jpg",
        name: "Fresh Ice Cream Cake"
      },

      {
        img: "https://onelittleproject.com/wp-content/uploads/2015/05/DSC_0481.jpg",
        name: "Dessert skewers kabab (Mashmellow, Banana, Pineapple, Grapes, Brownie)"
      },
    ]
  )

  // pop ups
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup as soon as the website opens
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <>

      {/* logo */}

      {/* <nav class="navbar navbar-light bg-white ">
        <div class="container-fluid d-flex justify-content-between align-items-center px-3">
          <a class="navbar-brand mb-0" href="#">
            <img src={food} alt="" width="140" height="100" class="d-inline-block align-text-top ms-5 " />
          </a>
          <h3 className='text-danger'>Maa's Magic Food Carnival</h3>
          <a href="https://forms.gle/VJQ1rsn9WRPWfKvJ9" target='blank'> <button type="button" class="btn btn-danger me-5 ">Register</button></a>
        </div>
      </nav> */}

      <nav className="navbar navbar-light bg-white">
        <div className="container-fluid px-3">
          <div className="row w-100 align-items-center">

            <div className="col-12 col-md-3 text-center text-md-start mb-2 mb-md-0 logo">
              <a className="navbar-brand" href="#">
                <img src={food} alt="Logo" width="160" height="120" className="d-inline-block align-text-top" />
              </a>
            </div>

            <div className="col-12 col-md-6 text-center mb-2 mb-md-0 title">
              <h3 className="text-danger mb-0">Maa's Magic Food Carnival</h3>
            </div>

            <div className="col-12 col-md-3 text-center text-md-end register">
              <a href="https://forms.gle/VJQ1rsn9WRPWfKvJ9" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-danger">Register</button>
              </a>
            </div>

          </div>
        </div>
      </nav>


      {/* pic */}

      <div className='food'>
        <h3 className='text-danger text-center fw-bold fs-1'>A Feast of Flavors & Fun Awaits You! </h3>
        <h4 className='text-white text-center'>01-06-2025 | Timings: 1:00 P.M to 6:00 P.M | Santho Lawns </h4>

      </div>

      {/* countdown */}

      <div className="countdown-container">
        <TimeCircle label="Days" value={timeLeft.days} />
        <TimeCircle label="Hours" value={timeLeft.hours} />
        <TimeCircle label="Minutes" value={timeLeft.minutes} />
        <TimeCircle label="Seconds" value={timeLeft.seconds} />
      </div>


      {/* healthiest event */}


      {/* <div className='section3 mt-5 text-center'>
        <h3 className='ms-5'>The Healthiest Event!</h3>
        <p className='text-secondary mt-3' style={{ textAlign: "justify" }}>These festivals have always been a means of uniting communities through celebrations of harvests and giving thanks for a plentiful growing season. Some food festivals are also harvest festivals.</p>
      </div> */}

      <div className="container text-center mt-5">
        <h3 className='ms-0'>The Healthiest Event!</h3>
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-10 col-lg-8">
            <p className="text-secondary" style={{ textAlign: "justify" }}>
              These festivals have always been a means of uniting communities through celebrations of harvests and giving thanks for a plentiful growing season. Some food festivals are also harvest festivals.
            </p>
          </div>
        </div>

      </div>


      <div className='icons d-flex  mt-5'>
        <div className='spoon text-center '>
          <ImSpoonKnife className='ms-2' />
          <hr />
          <h5 className=' mt-4 fw-bold w-75 ms-4' >EAT DELICIOUS FOOD</h5>
        </div>

        <div className='music text-center ms-4 '>
          <FaMusic className='ms-1 ' />
          <hr />
          <h5 className=' mt-4 fw-bold w-75 ms-4'>LISTEN TO LIVE MUSIC</h5>
        </div>

        <div className='heart ms-4'>
          <FaHeart className='hearts ' />
          <hr />
          <h5 className=' mt-4 fw-bold heartcont'>ENJOY THE ATMOSPHERE</h5>
        </div>
      </div>

      <div className="container text-center mt-5">
        <h3>Why it's Special</h3>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-10 col-lg-8">
            <p className="text-secondary" style={{ textAlign: "justify" }}>
              This is a plastic-free event (with the exception of water bottles). We are committed to reducing environmental impact and promoting sustainability throughout our celebration. To support this initiative, all serving materials and decorations will be eco-friendly and biodegradable wherever possible. Guests are kindly encouraged to avoid bringing plastic items.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-10 col-lg-8">
            <p className="text-secondary" style={{ textAlign: "justify" }}>
              In addition, all food served at the event will be freshly prepared on-site using high-quality ingredients. From appetizers to main courses and desserts, everything will be cooked with care to ensure both great taste and hygiene. Your health and enjoyment are our top priority, and we believe that freshly made food enhances the experience for everyone.
            </p>
          </div>
        </div>
      </div>


      {/* what's on */}

      <div className='whatsonbg'>

        <h3 className='text-center whatson'>What's on the Event</h3>

        <div className='d-flex mt-5 flex-wrap gap-5 justify-content-center'>

          <div className="card ms-3" style={{ width: '15rem' }}>
            <img src="https://www.felixhospital.com/sites/default/files/2022-06/children-playing-grass_0.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text text-center">
                Free entry for Children's upto 5years
              </h6>
            </div>
          </div>

          <div className="card ms-3" style={{ width: '15rem' }}>
            <img src="https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text text-center">
                For Students 10% Discount
              </h6>
            </div>
          </div>

          <div className="card ms-3" style={{ width: '15rem' }}>
            <img src="https://img.freepik.com/free-photo/old-used-brown-torn-ticket-stub-isolated_1101-3193.jpg?semt=ais_hybrid&w=740" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text text-center">
                Per Head ₹1799
              </h6>
            </div>
          </div>

          <div className="card ms-3" style={{ width: '15rem' }}>
            <img src="https://stlsevents.co.uk/wp-content/uploads/2024/01/Best-DJ-setups-for-different-events-1-1024x683.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text text-center">
                Live DJ & Dance Troupes
              </h6>
            </div>
          </div>


          <div className="card ms-3" style={{ width: '15rem' }}>
            <img src="https://t4.ftcdn.net/jpg/04/36/36/57/360_F_436365754_z3i5Es0sFmZuLY6GZIzdiU01v9HqpGZe.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text text-center ms-3">
                Unlimited Foods <img src="https://1000logos.net/wp-content/uploads/2021/02/Halal-logo.jpg" width={45}></img>
              </h6>
            </div>
          </div>

          <div className="card ms-3" style={{ width: '15rem' }}>
            <img src="https://t4.ftcdn.net/jpg/02/42/11/11/360_F_242111146_bIk4vYtvTo7n4T9EhOk37sLwVQjF6wVX.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text text-center">
                Live Playback Singers
              </h6>
            </div>
          </div>

          <div className="card ms-3" style={{ width: '15rem' }}>
            <img src="https://marriedinpalmbeach.com/wp-content/uploads/2017/02/Juju-Booth_Sonju-Photography.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text text-center">
                Selfie Booth, Instant Photo
              </h6>
            </div>
          </div>

          <div className="card ms-3" style={{ width: '15rem' }}>
            <img src="https://images.olx.com.pk/thumbnails/531981840-600x450.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text text-center">
                RJ with Games
              </h6>
            </div>
          </div>

          <div className="card ms-3" style={{ width: '15rem' }}>
            <img src="https://majesticbookclub.in/cdn/shop/articles/WhatsApp_Image_2025-02-25_at_11.06.45.jpg?v=1740461892" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text text-center">
                Physical Games for Kids
              </h6>
            </div>
          </div>

        </div>
      </div>



      {/* menu  */}

      <div className='menu text-center'>


        <div className="card-section">
          <h2 className='mt-5 '>Food Menus</h2>

          <h3 className="section-heading mt-5">Starter's</h3>
          <div className="grids-container starter mt-4">
            {starter.map((d, i) => (
              <div className="card" key={d.id}>
                <img src={d.image} alt="event" className="card-img" />
                <div className="card-body">
                  <p className="card-text">{d.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* main */}

        <div className="card-section">
          <h3 className="section-heading mt-5">Main Course's</h3>
          <div className="grid-container maincourse mt-4">
            {main.map((d, i) => (
              <div className="card" key={d.id}>
                <img src={d.img} alt="event" className="card-img" />
                <div className="card-body">
                  <p className="card-text">{d.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* sweet */}

        <div className="card-section">
          <h3 className="section-heading mt-5">Sweet's</h3>
          {/* <div className="grids-container sweets  "> */}
          <div className="row justify-content-center mt-4 ">
            {sweet.map((d, i) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center" key={d.id}>
                <div className="card sweet">
                  <img src={d.img} alt="event" className="card-img" />
                  <div className="card-body">
                    <p className="card-text">{d.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>







        {/* <div className="card-section ">
  <h3 className="section-heading mt-4 text-center">Sweet's</h3>
  <div className="row justify-content-center mt-4">
    {sweet.map((d, i) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center" key={d.id}>
        <div className="card" style={{ width: '100%', maxWidth: '260px' }}>
          <img src={d.img} alt={d.name} className="card-img-top" />
          <div className="card-body text-center">
            <p className="card-text ">{d.name}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div> */}






        {/* snack */}

        <div className="card-section">
          <h3 className="section-heading ">Snack's</h3>
          <div className="grid-container mt-4 ">
            {snacks.map((d, i) => (
              <div className="card" key={d.id}>
                <img src={d.img} alt="event" className="card-img" />
                <div className="card-body">
                  <p className="card-text">{d.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dessert */}

        {/* <div className="card-section">
          <h3 className="section-heading ">Dessert's</h3>
          <div className="grid-container">
            {dessert.map((d, i) => (
              <div className="card" key={d.id}>
                <img src={d.img} alt="event" className="card-img" />
                <div className="card-body">
                  <p className="card-text">{d.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="card-section">
          <h3 className="section-heading mt-5">Dessert's</h3>
          {/* <div className="grids-container sweets  "> */}
          <div className="row justify-content-center mt-5 ">
            {dessert.map((d, i) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center" key={d.id}>
                <div className="card sweet">
                  <img src={d.img} alt="event" className="card-img" />
                  <div className="card-body">
                    <p className="card-text">{d.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* bevarages */}


        {/* <div className="card" style={{width: "15rem",}}>
  <img src="https://uglyducklingbakery.com/wp-content/uploads/2023/07/blue-mojito.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build</p>
  </div>
</div> */}


        {/* <div className="card-section">
          <h3 className="section-heading ">Beverage's</h3>
 <div className="d-flex justify-content-center align-items-center mt-5 bg-light">

      <div className="card shadow beverage" style={{ width: '140px', borderRadius: '12px' }}>
        <img
          src="https://uglyducklingbakery.com/wp-content/uploads/2023/07/blue-mojito.jpg"
          className="card-img-top"
          alt="Softy Cone"
          style={{ height: '160px', borderRadius: '12px' }}
        />
        <div className="card-body text-center">
          <p className="card-text   mb-0">Softy Cone</p>
        </div>
      </div>
    </div>
      </div> */}


        <div className="card-section">
          <h3 className="section-heading mt-5">Beverage</h3>
          {/* <div className="grids-container sweets  "> */}
          <div className="row justify-content-center mt-4 ">
            {/* {sweet.map((d, i) => ( */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center" >
              <div className="card sweet">
                <img src="https://mybartender.com/wp-content/uploads/2024/07/Blue-Mojito.webp" alt="event" className="card-img" />
                <div className="card-body">
                  <p className="card-text">Mojito Blue Curacoa</p>
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>




      </div>








      {/* poster */}

      <div className="container-fluid enquiry">
        <h3 className='text-center mt-5 pt-3'> Event Poster</h3>
        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-md-4 mb-3 d-flex justify-content-center">
            <img src={poster1} className="img-fluid" width={350} alt="..." style={{ boxShadow: "5px 5px 5px rgba(97, 85, 85, 0.45)" }} />
          </div>

          <div className="col-12 col-md-4 mb-3 d-flex justify-content-center">
            <img src={poster2} className="img-fluid" width={350} alt="..." style={{ boxShadow: "5px 5px 5px rgba(97, 85, 85, 0.45)" }} />
          </div>
        </div>

      </div>


      {/* contact details */}

      <div className="contact mt-5">
        <h3 className="text-center pt-3">Contact Details</h3>

        <div className="container mt-4">
          <div className="row text-center g-4">

            <div className="col-12 col-md-4">
              <h5 className="p-2 border border-white"><IoMail className="me-2" />maas.event.planners@gmail.com</h5>
            </div>

            <div className="col-12 col-md-4">
              <h5 className="p-2 border border-white"><FaPhoneAlt className="me-2" />9791275774 | 9442125774</h5>
            </div>

            <div className="col-12 col-md-4">
              <h5 className="p-2 border border-white"><IoLocation className="me-2" />
                <a href="https://g.co/kgs/SdEjxsy" className="text-decoration-none text-dark" target="_blank" rel="noopener noreferrer">Santho Lawns</a>
              </h5>
            </div>

          </div>
        </div>
      </div>


      {/* enquiry */}


      {/* <div className="container-fluid my-5 enquiry">
        <h3 className="text-center mb-4 pt-3">Stay Connected With Us</h3>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="name@gmail.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="comments" className="form-label">Comments:</label>
              <textarea className="form-control" id="comments" rows="3" placeholder="Write your message here..."></textarea>
            </div>

            <div className="text-center">
              <button type="button" className="btn btn-danger px-4">Send</button>
            </div>

          </div>
        </div>
      </div> */}


      {/* faq */}

      <div className="container-fluid my-5 contact">
        <h3 className="text-center mb-4 pt-3">Frequently Asked Questions</h3>

        <div className="accordion" id="faqAccordion">

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                1. What is the event about?
              </button>
            </h2>

            <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
              <div className="accordion-body ">
                This event is a celebration of food, culture, and community featuring local vendors and live entertainment.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                2. Is there an entry fee?
              </button>
            </h2>

            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                No, you should pay ₹1799 per head and for children free entry upto 5years
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                3. Is any vehicle parking place is there?
              </button>
            </h2>

            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes, we have vehicle parking place
              </div>
            </div>
          </div>

        </div>
      </div>



      {/* pop ups */}

      {showPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(5px)', zIndex: 1050, }}>

          <div className="card shadow p-4 text-center" style={{ maxWidth: '400px', width: '90%', height: "250px" }}>
            <button type="button" className="btn-close position-absolute top-0 end-0 m-3" aria-label="Close" onClick={handleClose}></button>
            <p className='mt-5 fw-bold '>Limited Tickets available! grab your tickets soon</p>
            <a href="https://forms.gle/VJQ1rsn9WRPWfKvJ9" target='blank'> <button type="button" className="btn btn-danger px-4 mt-4 w-50">Register</button> </a>

          </div>
        </div>
      )}

      {/* footer */}

      <div className='text-center mt-5 contact p-3'>
        <h6>@ All Rights Reserved by Shine Craft Technologies</h6>
      </div>





    </>
  );
}

const TimeCircle = ({ label, value }) => (
  <div className="time-circle">
    <div className="circle">{String(value).padStart(2, "0")}</div>
    <div className="label">{label}</div>
  </div>
);

const getTimeRemaining = (target) => {
  const now = new Date().getTime();
  const total = target - now;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};














export default Foodevent;