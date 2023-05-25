//affilate data sidebar


// {addFormVisible && (
//     <div className="add-advertiser-form">
//       <form>
//         <h1 className="form-title-advertiser">Add Advitisors</h1>
//         <button className="add-advertiser-btn" onClick={() => setAddFormVisible(!addFormVisible)}> Close</button>
//         <label>
//           Company Name:
//           <input type="text" name="companyName" />
//         </label>
//         <label>
//           Status:
//           <select name="status">
//             <option value="active">Active</option>
//             <option value="pending">Pending</option>
//             <option value="inactive">Inactive</option>
//           </select>
//         </label>
//         <label>
//           Profile Picture:
//           <input type="file" name="profilePicture" />
//         </label>
//         <div className="credential"><h3>Access Credentials</h3></div>
//         <label>
//           Email:
//           <input type="email" name="email" />
//         </label>
//         <label>
//           Password:
//           <input type="password" name="password" />
//         </label>
//         <label>
//           Confirm Password:
//           <input type="password" name="confirmPassword" />
//         </label>
//         <div class="contact">
//           <h2>Contact</h2>
//           <label>
//             First Name:
//             <input type="text" name="firstName" />
//           </label>
//           <label>
//             Last Name:
//             <input type="text" name="lastName" />
//           </label>
//           <label>
//             Phone:
//             <input type="tel" name="phone" />
//           </label>
//           <label>
//             Contact Type:
//             <select name="contactType">
//               <option value="skype">Skype</option>
//               <option value="whatsapp">WhatsApp</option>
//               <option value="facebook-messenger">Facebook Messenger</option>
//               <option value="viber">Viber</option>
//               <option value="telegram">Telegram</option>
//               <option value="line">Line</option>
//             </select>
//           </label>
//           <button class="add-contact-button">+ Add Contact</button>
//         </div>


//         <div class="address">
//           <h2>Address</h2>
//           <label>
//             Country:
//             <input type="text" name="country" />
//           </label>
//           <label>
//             Religion:
//             <input type="text" name="religion" />
//           </label>
//           <label>
//             City:
//             <input type="text" name="city" />
//           </label>
//           <label>
//             Postcode:
//             <input type="text" name="postcode" />
//           </label>
//           <label>
//             Street:
//             <input type="text" name="street" />
//           </label>
//         </div>


//         <div class="administration">
//           <h2>Administration</h2>
//           <label>
//             Tags:
//             <select name="tags">
//               <option value="business">Business</option>
//               <option value="clothing">Clothing</option>
//               <option value="computer-networking">Computer Networking</option>
//             </select>
//           </label>
//           <label>
//             Traffic Types:
//             <select name="trafficTypes">
//               <option value="banners">Banners</option>
//               <option value="email">Email</option>
//               <option value="social-media">Social Media</option>
//               <option value="search">Search</option>
//               <option value="non-incentivized">Non-Incentivized</option>
//               <option value="incentivized">Incentivized</option>
//             </select>
//           </label>
//           <label>
//             Teammates:
//             <select name="teammate">
//               <option value="rahul">Rahul</option>
//               <option value="raman">Raman</option>
//               <option value="Aman">Aman</option>

//             </select>
//           </label>
//         </div>





//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   )}


//offers sidebar const


 {/* {addFormVisible && (
        <div className="add-advertiser-form">
          <form>
            <h1 className="form-title-advertiser">Add Offers</h1>
            <button className="add-advertiser-btn" onClick={() => setAddFormVisible(!addFormVisible)}>Close</button>
            <label>
              Company Name:
              <input type="text" name="companyName" />
            </label>
            <label>
              Status:
              <select name="status">
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </select>
            </label>
            <label>
              Profile Picture:
              <input type="file" name="profilePicture" />
            </label>
            <label>
              Advertiser:
              <input style={{ width: "30%" }} type="text" placeholder='search' name="advertiser" />
            </label>
            <label style={{ width: "30%" }} type="text" >
              <h2 >Offer Availability:</h2>
              <select name="offers-availability">
                <option value="public">Public</option>
                <option value="approval">Requires Approval</option>
                <option value="private">Private</option>
              </select>
            </label>



            <div class="landing-page" style={{ width: "60%" }} >
              <h2>Offer Landing Page</h2>

              <label>
                Landing Page URL:
                <input type="text" name="landing-page-url" placeholder='http://landing-page.com' />
              </label>

              <label>
                Preview URL:
                <input type="text" name="preview-page-url" placeholder='http://preview-page.com' />
              </label>




            </div>

            <div class="offer-goal" style={{ width: "60%" }} >
              <h2>Offer Goal</h2>


              <label>
                Goal Title:
                <input type="text" name="goal-title" />
              </label>
              <label>
                Goal Type:
                <select name="trafficTypes">
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpc">CPC</option>
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpl">CPL(fixed payout)</option>
                  <option value="cps">CPS</option>
                  <option value="cpi">CPI(fixed payout)</option>
                  <option value="reg">REG</option>
                  <option value="dep-cpa">DEP CPA(fixed payout)</option>
                  <option value="dep-rev">DEP RevShare(%)</option>
                </select>
              </label>


              <label>
                Revenue:
                <input type="text" name="preview-page-url" placeholder='$' />
              </label>

              <label>
                Payout:
                <input type="text" name="preview-page-url" placeholder='$' />
              </label>


            </div>



            <div class="offer-goal" style={{ width: "60%" }} >
              <h2>Additional Information</h2>

              <label>
                Categories:
                <select name="trafficTypes">
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpc">CPC</option>
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpl">CPL(fixed payout)</option>
                  <option value="cps">CPS</option>
                  <option value="cpi">CPI(fixed payout)</option>
                  <option value="reg">REG</option>
                  <option value="dep-cpa">DEP CPA(fixed payout)</option>
                  <option value="dep-rev">DEP RevShare(%)</option>
                </select>
              </label>

              <label>
                Tags:
                <select name="trafficTypes">
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpc">CPC</option>
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpl">CPL(fixed payout)</option>
                  <option value="cps">CPS</option>
                  <option value="cpi">CPI(fixed payout)</option>
                  <option value="reg">REG</option>
                  <option value="dep-cpa">DEP CPA(fixed payout)</option>
                  <option value="dep-rev">DEP RevShare(%)</option>
                </select>
              </label>

              <label>
                Allowed Traffic Types:
                <select name="trafficTypes">
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpc">CPC</option>
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpl">CPL(fixed payout)</option>
                  <option value="cps">CPS</option>
                  <option value="cpi">CPI(fixed payout)</option>
                  <option value="reg">REG</option>
                  <option value="dep-cpa">DEP CPA(fixed payout)</option>
                  <option value="dep-rev">DEP RevShare(%)</option>
                </select>
              </label>


              <label>
                Denied Traffic Types
                :
                <select name="trafficTypes">
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpc">CPC</option>
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpl">CPL(fixed payout)</option>
                  <option value="cps">CPS</option>
                  <option value="cpi">CPI(fixed payout)</option>
                  <option value="reg">REG</option>
                  <option value="dep-cpa">DEP CPA(fixed payout)</option>
                  <option value="dep-rev">DEP RevShare(%)</option>
                </select>
              </label>
            </div>
            <div>


              <label>
                External ID:
                <input type="text" name="external-id" />
              </label>


            </div>






          </form>
        </div>
      )}


 */}