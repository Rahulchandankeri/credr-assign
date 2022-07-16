import React from "react";
import "../Assets/sass/main.css";
import activa from "../Assets/images/Activa-6G_FalconBlue-NB.png";
export default function main() {
  return (
    <section className="main">
      <section className="section-predata">
        <div className="section-data">
          <div className="options-section">
            <p className="caption-main">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <p className="caption-sec m-top">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
            <div className="what-we-offer-container">
              <p className="offer-caption">what we offer</p>
              <div className="checkbox-container">
                <div className="radio-container">
                  <input type="radio" id="check" name="check" value="lore" />
                  <label for="check"> Lorem ipsum dolor</label>
                </div>
                <div className="radio-container">
                  <input type="radio" id="check" name="check" value="lore" />
                  <label for="check"> Lorem ipsum dolor</label>
                </div>
                <div className="radio-container">
                  <input type="radio" id="check" name="check" value="lore" />

                  <label for="check"> Lorem ipsum dolor</label>
                </div>
                <div className="radio-container">
                  <input type="radio" id="check" name="check" value="lore" />

                  <label for="check"> Lorem ipsum dolor</label>
                </div>
                <div className="radio-container">
                  <input type="radio" id="check" name="check" value="lore" />

                  <label for="check"> Lorem ipsum dolor</label>
                </div>
                <div className="radio-container">
                  <input type="radio" id="check" name="check" value="lore" />
                  <label for="check"> Lorem ipsum dolor</label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-container">
            <div className="form">
              <p className="personal-detail">Personal Details</p>
              <div className="input-container">
                <span className="field-name">Name</span>
                <input type="text"></input>
              </div>
              <div className="input-container">
                <span className="field-name">Mobile Number</span>
                <input type="number"></input>
              </div>
              <div className="city-select-container">
                <select id="city">
                  <option value="select-city">Select City</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>
              <div className="cta-select-container">
                <button className="cta-btn">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="caption-section">
        <div className="dialogue-section">
          <p className="caption-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="caption-mini mg-b-m">
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          </p>
          <p className="caption-main">Lorem ipsum </p>
          <p className="caption-mini mg-b-sm ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </p>
          <p className="caption-mini">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit
          </p>
        </div>
        <div className="image-section">
          <img src={activa} alt="Activa" />
        </div>
      </section>
      <section className="option-section">
        <p className="caption-main">Lorem ipsum dolor sit amet</p>
        <p className="caption-mini mg-b-m">
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        </p>

        <div className="main-point-container">
          <div className="sub-point-container">
            <div className="points-container">
              <div className="num-container">
                <p>1</p>
              </div>
              <div className="txt-container">
                <p>Lorem ipsum dolor</p>
              </div>
            </div>
            <div className="points-container">
              <div className="num-container">
                <p>2</p>
              </div>
              <div className="txt-container">
                <p>Lorem ipsum dolor</p>
              </div>
            </div>
            <div className="points-container">
              <div className="num-container">
                <p>3</p>
              </div>
              <div className="txt-container">
                <p>Lorem ipsum dolor</p>
              </div>
            </div>
          </div>
          <div className="sub-point-container">
            <div className="points-container">
              <div className="num-container">
                <p>4</p>
              </div>
              <div className="txt-container">
                <p>Lorem ipsum dolor</p>
              </div>
            </div>
            <div className="points-container">
              <div className="num-container">
                <p>5</p>
              </div>
              <div className="txt-container">
                <p>Lorem ipsum dolor</p>
              </div>
            </div>
            <div className="points-container">
              <div className="num-container">
                <p>6</p>
              </div>
              <div className="txt-container">
                <p>Lorem ipsum dolor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
