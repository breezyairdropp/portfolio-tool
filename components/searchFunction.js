"use client"


function getResult() {
  console.log(document.getElementById('searched-text'))
}


export default function SearchFunction() {


    return (

        `
        <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" class="contact-us-form" data-wf-page-id="65f5ba6daf797839254fd64c" data-wf-element-id="2152f016-7ff7-c251-da25-8a583537a4f3" aria-label="Email Form 2">
          <input class="get-leads-form-input-search w-input" maxlength="256" name="text-2" data-name="Email 2" placeholder="Enter your target audiences e.g software engineers" type="text" id="searched-text" required="" />
          <div class="contact-us-form-input-wrap">
          <select id="field" name="field" data-name="Field" required="" class="contact-us-form-select w-select">
              <option value="">Select Platform</option>
              <option value="First">Google</option>
              <option value="Second">Twitter</option>
              <option value="Third">Facebook</option>
              <option value="fourth">Instagram</option>
              </select>
          </div>
          <input
            class="contact-us-form-input email w-input"
            maxlength="256"
            name="email-3"
            data-name="Email 3"
            placeholder="Enter Your Email"
            type="email"
            id="email-3"
            required=""
          /><textarea
            required=""
            placeholder="Message"
            maxlength="5000"
            id="field-3"
            name="field-3"
            data-name="Field 3"
            class="contact-us-form-text-area w-input"
          ></textarea>
          <button class="password-submit-btn w-password-page w-button" onclick={getResult}>
            <a >Submit</a>
          </button>
        </form>`

    )
}