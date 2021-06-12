import './App.css';

function App() {
  return (
    <div className="App">

      <div class="header">
        <button class="login_bt" >Login</button>
        <h4 class="sign_up">Sign up</h4>  
      </div>

      <div class="left_column">
        <h3 class="left_title">Find a rental property</h3>
        <label class="search_area_label">Search area</label> 
        <input class="search_area_input" placeholder="eg. Oxford or NW3"></input>
        <label class="min_max_beds_label">Minimum Beds</label> 
        <label class="min_max_beds_label">Maximum Beds</label> 
        <input class="min_max_beds_input" placeholder="No min"></input>
        <input class="min_max_beds_input" placeholder="No max"></input>
        <label class="price_label">Price per</label> 
        <input class="price_input" placeholder="Month"></input>
        <label class="min_max_price_label">Minimum Price</label> 
        <label class="min_max_price_label">Maximum Price</label> 
        <input class="min_max_price_input" placeholder="No min"></input>
        <input class="min_max_price_input" placeholder="No max"></input>
        <button class="find_prop_btn"><b>FIND PROPERTIES</b></button>
      </div>

      <div class="body">
        <div class="mid_column">
          <h3 class="search_results_no">15 Search Results</h3>  
          <center><div class="room_card">
          <img class="room_image" src="room.png"/>
          <h5 class="room_name">3 Bedrom flat in Hackney Bridge</h5>
          <h3 class="room_price">£1,420 pcm <br/>
          <img class="bed_icon" src="bed.png" height="20px" width="30px"/><span class="three">3</span>
          <img class="sofa_icon" src="sofa.png" height="20px" width="30px"/><span class="one"><h3>1</h3></span>
          </h3>

          <img class="under_img" src="underground.png" height="20px" width="30px"/>
          <h6 class="under_distance">South Kensington (0.1 mile)</h6>
          <h6 class="room_date">Move-in from 20/04/21</h6>
          <img class="mail_icon" src="mail.png" height="25px" width="35px"/>
          </div></center>
          <center><div class="room_card">
          <img class="room_image" src="room.png" height="180" width="250"/>
          <h5 class="room_name">3 Bedrom flat in Hackney Bridge</h5>
          <h3 class="room_price">£1,420 pcm <br/>
          <img class="bed_icon" src="bed.png" height="20px" width="30px"/><span class="three">3</span>
          <img class="sofa_icon" src="sofa.png" height="20px" width="30px"/><span class="one"><h3>1</h3></span>
          </h3>

          <img class="under_img" src="underground.png" height="20px" width="30px"/>
          <h6 class="under_distance">South Kensington (0.1 mile)</h6>
          <h6 class="room_date">Move-in from 20/04/21</h6>
          <img class="mail_icon" src="mail.png" height="25px" width="35px"/>
          </div></center>
          <center><div class="room_card">
          <img class="room_image" src="room.png" height="180" width="250"/>
          <h5 class="room_name">3 Bedrom flat in Hackney Bridge</h5>
          <h3 class="room_price">£1,420 pcm <br/>
          <img class="bed_icon" src="bed.png" height="20px" width="30px"/><span class="three">3</span>
          <img class="sofa_icon" src="sofa.png" height="20px" width="30px"/><span class="one"><h3>1</h3></span>
          </h3>

          <img class="under_img" src="underground.png" height="20px" width="30px"/>
          <h6 class="under_distance">South Kensington (0.1 mile)</h6>
          <h6 class="room_date">Move-in from 20/04/21</h6>
          <img class="mail_icon" src="mail.png" height="25px" width="35px"/>
          </div></center>
          <center><div class="room_card">
          <img class="room_image" src="room.png" height="180" width="250"/>
          <h5 class="room_name">3 Bedrom flat in Hackney Bridge</h5>
          <h3 class="room_price">£1,420 pcm <br/>
          <img class="bed_icon" src="bed.png" height="20px" width="30px"/><span class="three">3</span>
          <img class="sofa_icon" src="sofa.png" height="20px" width="30px"/><span class="one"><h3>1</h3></span>
          </h3>

          <img class="under_img" src="underground.png" height="20px" width="30px"/>
          <h6 class="under_distance">South Kensington (0.1 mile)</h6>
          <h6 class="room_date">Move-in from 20/04/21</h6>
          <img class="mail_icon" src="mail.png" height="25px" width="35px"/>
          </div></center>
          
          
        </div>
      </div>

    </div>
  );
}

export default App;
