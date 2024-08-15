# Nexus Point Frontend Technical Challenge

Hi 👋

Congratulations on making it to our Technical Challenge. At Nexus Point we wanted to build our technical challenge around giving you the opportunity to best showcase your strengths in a practical scenario. When reviewing your technical test we'll be looking out for:

- Precise, responsive, accessible HTML/CSS
- Clean code structure and organisation
- Efficient handling of data
- A good understanding of performant code

Focus primarly on the vehicle card component ensuring that it is pixel perfect and responsive. We appreciate your time and don't want you to go overboard on this. As long as we can get a good understanding of how you write code, anything additional you decide to do is purely brownie points.

Our stack at Nexus Point:

- Vue/Nuxt 2 & 3
- Pinia/Vuex
- SCSS
- Storybook for component library documentation
- Mix of Typescript and vanilla JS

Whilst we would prefer a candidate to write in Vue/Nuxt for this technical challenge it is not a requirement. We understand that adapting to new technologies is all part of the job and we wouldn't want to miss out on a fantastic developer because they've never used Vue before. If you believe you can put your best foot forward by writing your project in React/Next or even a traditional vanilla javascript application by all means do that.

## Getting started

We would like you to re-create a vehicle list component for one of our standard Search Results Pages (SRP).

You can view the Figma for the design [here](https://www.figma.com/design/MrZR9TZOVrI8pwBjJuDprZ/Code-Review-Template?node-id=1-2&m=dev)

Font (ignore SF PRO in Figma) - https://fonts.google.com/specimen/Inter

We have created a dummy api endpoint which returns a list of vehicles. Favouriting functionality, viewing vehicles, posting form data, calculating finance for example can all be mocked as you see fit.

api endpoint url: https://m6zhmj6dggvrmepfanilteq4q40rlalu.lambda-url.eu-west-1.on.aws

Vehicle list found at /vehicles
Which accepts the following query paramaters

- page: number
- results_per_page: number
- advert_classification: New | Used | All (default)

If you need to for whatever reason, you can cd into `/server` and run `yarn dev` to get the api running locally for your own testing purposes.

# Submission

Please send through a public github repo link to your code. If you can host it on Vercel/Netlify/wherever else that would be ideal but as long as we can clone your project and get it running, no worries.
