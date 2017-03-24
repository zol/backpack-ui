# Change log

## 4.5.0
- [update] Remove isRequired from aspectRatio prop in CardVideo component ([#177](https://github.com/lonelyplanet/backpack-ui/pull/177))
- [new] Add removeAll prop to ModalContentWatchLaterList component ([#177](https://github.com/lonelyplanet/backpack-ui/pull/177))
- [update] Replace anchor with Link component in SlideTall component ([#177](https://github.com/lonelyplanet/backpack-ui/pull/177))
- [new] Add removeAll prop to WatchLaterList component ([#177](https://github.com/lonelyplanet/backpack-ui/pull/177))
- [new] Add removeAll prop to WatchLaterModal component ([#177](https://github.com/lonelyplanet/backpack-ui/pull/177))
- [update] Update styles for Lede component ([#176](https://github.com/lonelyplanet/backpack-ui/pull/176))
  * Import PropTypes from React
  * Delete defaultProps
  * Add style prop
  * Delete docblock comments
  * Rename styles.base to styles.container
  * Add styles to paragraph
  * Add children prop, deprecate content prop; keep content prop for backwards compatibility
  * Replace settings.colors with styles/colors
  * Import typography styles
- [update] Update heading component ([#175](https://github.com/lonelyplanet/backpack-ui/pull/175))
  * Remove white space between defaultProps
  * Replace rgb util with rgba util
  * Use font weights from styles/typography; extraThin (100) is not a weight, but it was set to be the same as thin (300) instead of being removed completely to maintain backwards compatibility and prevent errors
  * Use colors from styles/colors
  * Use media queries from styles/mq
  * Remove settings.json
  * Use font sizes from styles/typography
  * Import PropTypes
  * Use radium to merge conditional styles

## 4.4.0
- [new] Add solid black to styles/colors as bgOverlay ([#174](https://github.com/lonelyplanet/backpack-ui/pull/174))

## 4.3.0
- [new] Add heading, fontWeight to propType validation ([#171](https://github.com/lonelyplanet/backpack-ui/pull/171))
- [new] Create text components to match typography styles ([#171](https://github.com/lonelyplanet/backpack-ui/pull/171))  
  These components map to styles/typography and use utils/typography to apply the styles. TextHeading is a stripped down version of Heading and the idea is to deprecate Heading in a future release. TextHeading was created 1) somewhat as an experiment to simplify Heading and 2) as to not break every implementation of Heading currently in use.

## 4.2.3
- [update] Update Newsletter to work with Salesforce and allow different newsletters to be subscribed to ([#169](https://github.com/lonelyplanet/backpack-ui/pull/169))
- [update] Update disclaimer text styles ([#168](https://github.com/lonelyplanet/backpack-ui/pull/168))
  * Import propTypes util for style prop validation
  * Import and use color from styles/colors
  * Import typography styles for font size
  * Reformat JSX for better readability

## 4.2.2
- [update] Add style prop to FeaturedArticle ([#167](https://github.com/lonelyplanet/backpack-ui/pull/167))
- [fix] Use WebkitOverflowScrolling to fix radium warning in TabbedNav ([#165](https://github.com/lonelyplanet/backpack-ui/pull/165))
- [fix] Set borderWidth in Newsletter to suppress radium warning ([#164](https://github.com/lonelyplanet/backpack-ui/pull/164))

## 4.2.1
- [update] Remove id property from VideoEmbed ([#163](https://github.com/lonelyplanet/backpack-ui/pull/163))
- [update] Add transition to animate accordion content ([#162](https://github.com/lonelyplanet/backpack-ui/pull/162))

## 4.2.0
- [update] Add event to onClick event of the type selector ([#161](https://github.com/lonelyplanet/backpack-ui/pull/161))
- [update] Change Modal to be stateless functional component ([#159](https://github.com/lonelyplanet/backpack-ui/pull/159))
- [update] Fix PropType Warnings ([#159](https://github.com/lonelyplanet/backpack-ui/pull/159))
- [new] Create Link (Wrapped React-Router) Component ([#158](https://github.com/lonelyplanet/backpack-ui/pull/158))
- [update] Change text for empty video list ([#157](https://github.com/lonelyplanet/backpack-ui/pull/157))

## 4.1.0
- [update] Add `actionIcon` prop to CardVideo component ([#152](https://github.com/lonelyplanet/backpack-ui/pull/152))
- [new] Add Close icon ([#152](https://github.com/lonelyplanet/backpack-ui/pull/152))
- [update] Update Modal component; add more responsive styles ([#152](https://github.com/lonelyplanet/backpack-ui/pull/152))
- [new] Create modal content components; ModalContentSocialAuth and ModalContentWatchLaterList ([#152](https://github.com/lonelyplanet/backpack-ui/pull/152))
- [update] Change `text` prop to `children` prop in SocialLoginButton component; update styles ([#152](https://github.com/lonelyplanet/backpack-ui/pull/152))
- [new] Add WatchLater components ([#152](https://github.com/lonelyplanet/backpack-ui/pull/152))
- [update] Add accentGreen to colors ([#154](https://github.com/lonelyplanet/backpack-ui/pull/154))
- [new] Create Toast component ([#154](https://github.com/lonelyplanet/backpack-ui/pull/154))
- [update] Use typography style for AuthorName ([#156](https://github.com/lonelyplanet/backpack-ui/pull/156))
- [update] Use `propTypes.style` for ItalicText ([#156](https://github.com/lonelyplanet/backpack-ui/pull/156))
- [update] Update LocationLabel styles ([#156](https://github.com/lonelyplanet/backpack-ui/pull/156))
- [update] Update Tag styles ([#156](https://github.com/lonelyplanet/backpack-ui/pull/156))
- [update] Add hover scale effect to CoverPhoto ([#148](https://github.com/lonelyplanet/backpack-ui/pull/148))
  - In card, tile and list item components, the CoverPhoto scales
slightly when hovered
- [new] Create new stories for typography and fonts ([#153](https://github.com/lonelyplanet/backpack-ui/pull/153))
- [update] Update colors story to use colors defined in src/styles ([#153](https://github.com/lonelyplanet/backpack-ui/pull/153))
- [new] Create typography util ([#153](https://github.com/lonelyplanet/backpack-ui/pull/153))
  - Contains mixins for typographic stylings; they can be appended to existing styles with `Object.assign`
- [update] Use color function to create `rgba` values ([#153](https://github.com/lonelyplanet/backpack-ui/pull/153))
- [update] Update font utility; should accept only "benton" or "miller" ([#153](https://github.com/lonelyplanet/backpack-ui/pull/153))
- [new] Begin moving settings.json into styles directory ([#153](https://github.com/lonelyplanet/backpack-ui/pull/153))
  - As we continue to define a set of styles for LP apps, we’ll move away
from the settings.json file and break styles into smaller modules. These styles have been defined in the front-end framework.
- [new] Create accordion components ([#151](https://github.com/lonelyplanet/backpack-ui/pull/151))

## 4.0.0
- [breaking] Replace Profile component with ArticleAuthor component; Profile will be reserved for user profile components ([#146](https://github.com/lonelyplanet/backpack-ui/pull/146))
  - `size` and `type` props have been removed; use `style` prop to change
  component’s style based on context
  - `avatar` is now `avatarSrc`
  - `profileUrl` is now `href`
  - Default prop for `orientation` is now “vertical”
- [update] Update avatar sizes, use `propTypes.style` ([#145](https://github.com/lonelyplanet/backpack-ui/pull/145))
- [new] Create propTypes.js utility; exports commonly used propTypes for validation ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
- [update] Move styles from CardVideo to Card ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
  - CardVideo had some “base” styles that should’ve been applied to Card so that all card components can inherit the styles
- [update] Move responsive styles out of CardVideo ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
  - CardAnchor inside of CardVideo had some responsive styles applied that were moved to the component so that other card components can inherit the styles
- [new] Create CardBullets component ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
  - This is a wrapper around BulletDescription with specific styles applied for use within Cards
- [new] Create CardHeading component ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
  - This is a wrapper around Heading with specific styles applied for use within Cards
- [breaking] Repurpose CardDescription ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
  - CardDescription is now a paragraph element that was taken from CardDescriptionPoster. Previously CardDescription was a heading and bullet list, but due to responsive styles, the heading and bullets have been broken out into their own components
- [breaking] Remove CardDescriptionPoster; paragraph in this component is now CardDescription ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
- [update] Use `propTypes.style` for validation in card components ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
- [update] Update CardVideo component ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
  - Move container, bullets, heading and anchor styles into their
  respective card components
  - Import new CardHeading and CardBullets components
  - Use `propTypes.style` for validation
- [update] Change tile width from `412px` to `410px` ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
  - This is so that the proper gutter size, `30px`, can be used and allow the tiles to remain within the grid’s max-width `1290px`
- [update] Change gutter from `27px` to `30px` in CardShelfVideo component
- [update] Update TileVideoPoster component ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
  - Change width from `290px` to `300px` so that `30px` gutter can be used and the tile stays on the grid
  - Add responsive styles
  - Remove CardDescriptionPoster component
- [update] Update CardShelfVideoSwiper component ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
  - Update responsive styles; now accounts for 4 visible slides
  - Change card/slide width from `412px` to `410px` (3 slides) and `290px` to `300px` (4 slides) so that `30px` gutter can be used
- [update] Replace CardDescription with CardHeader and CardBullets in CardBasic and CardPrice components ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
- [update] Change CardImage dimensions to use widths of `410px` and `300px` to match updates to CardVideo component ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
- [update] Export new card components; remove unused exports ([#144](https://github.com/lonelyplanet/backpack-ui/pull/144))
- [breaking] Replace `tags` prop, which was an array of objects, with `children`, which accepts the Tag component, for TagList component ([#140](https://github.com/lonelyplanet/backpack-ui/pull/140))
- [update] Update styles, “selected” background color in Tag component ([#140](https://github.com/lonelyplanet/backpack-ui/pull/140))
- [new] Add `onClick` prop and allow a button element in Tag component ([#140](https://github.com/lonelyplanet/backpack-ui/pull/140))
- [breaking] Rename `slug` prop to `href` in Tag component ([#140](https://github.com/lonelyplanet/backpack-ui/pull/140))
- [breaking] Rename `label` prop to `children` in Tag component ([#140](https://github.com/lonelyplanet/backpack-ui/pull/140))
- [update] Check for `bullets.length` in CardVideo component to prevent empty `div` from being rendered ([#142](https://github.com/lonelyplanet/backpack-ui/pull/142), [#143](https://github.com/lonelyplanet/backpack-ui/pull/143))
- [update] Changes zone text in SpotlightZone to be absolutely positioned from the top opposed to a large negative top margin which was pushing the text out of view at times ([#141](https://github.com/lonelyplanet/backpack-ui/pull/141))

## 3.10.0
- [new] Install pre-commit module, add lint script to package.json; this makes the linter run before a piece of code is committed. ([#139](https://github.com/lonelyplanet/backpack-ui/pull/139))
- [new] Install jQuery 3.1.1 ([#139](https://github.com/lonelyplanet/backpack-ui/pull/139))
- [update] Temporarily disable `jsx-a11y/no-static-element-interactions` rule in a few components; this can be addressed in the future.
- [fix] Clean up a bunch of linting violations ([#139](https://github.com/lonelyplanet/backpack-ui/pull/139))
- [fix] Fix an issue with CardVideo in Storybook where component needed `StyleRoot` since it now has media queries ([#139](https://github.com/lonelyplanet/backpack-ui/pull/139))
- [fix] Fix issue where static method `formatFormData` in Newsletter component was being called on `this` and not `Newsletter` class. ([#139](https://github.com/lonelyplanet/backpack-ui/pull/139))

## 3.9.0
- [new] Add PhotoGallery component; uses [react-photoswipe](https://github.com/minhtranite/react-photoswipe) which is a React wrapper around [Photoswipe](https://github.com/dimsemenov/PhotoSwipe) ([#100](https://github.com/lonelyplanet/backpack-ui/pull/100), [#136](https://github.com/lonelyplanet/backpack-ui/pull/136))

## 3.8.3
- [fix] Remove min-height restriction on MastheadSlider component because its content was overflowing ([#135](https://github.com/lonelyplanet/backpack-ui/pull/135))

## v3.8.2
- [fix] Fix issue where MastheadSlider component loads with every slide visible for a brief moment ([#131](https://github.com/lonelyplanet/backpack-ui/pull/131))

## v3.8.1
- [update] Add onClick prop for call-to-action in Slide component for masthead ([#134](https://github.com/lonelyplanet/backpack-ui/pull/134))

## v3.8.0
- [update] Remove minHeight and width from Card component, update its box-shadow ([#132](https://github.com/lonelyplanet/backpack-ui/pull/132))
- [update] Make CardVideo component responsive ([#132](https://github.com/lonelyplanet/backpack-ui/pull/132))
- [update] Make CardShelfVideoSwiper component responsive ([#132](https://github.com/lonelyplanet/backpack-ui/pull/132))
- [update] Rename prop autoPlay to autoplay in VideoEmbed component ([#133](https://github.com/lonelyplanet/backpack-ui/pull/133))
- [fix] Fix brief unstyled player controls glitch in VideoEmbed component ([#133](https://github.com/lonelyplanet/backpack-ui/pull/133))
- [new] Add onEnded prop in VideoEmbed component ([#133](https://github.com/lonelyplanet/backpack-ui/pull/133))

## v3.7.0
- [new] Add onClick prop to ListItem component ([#130](https://github.com/lonelyplanet/backpack-ui/pull/130))
- [new] Add customSettings prop to TallCarousel component ([#129](https://github.com/lonelyplanet/backpack-ui/pull/129))

## v3.6.0
- [new] Add onClick prop to thumbnail list item ([#128](https://github.com/lonelyplanet/backpack-ui/pull/128))
- [new] Add autoPlay prop to VideoEmbed component ([#127](https://github.com/lonelyplanet/backpack-ui/pull/127))
- [update] Increase heading size in Slide component ([#126](https://github.com/lonelyplanet/backpack-ui/pull/126))

## v3.5.1
- [update] Adjust opacity to create scrim for thumbnail list item image ([#125](https://github.com/lonelyplanet/backpack-ui/pull/125))

## v3.5.0
- [update] Add flex-grow property to thumbnail list item content ([#123](https://github.com/lonelyplanet/backpack-ui/pull/123))
- [update] Refactor CardShelfVideoSwiper into stateful component in order to control the display of pagination buttons ([#124](https://github.com/lonelyplanet/backpack-ui/pull/124))

## v3.4.2
- [update] Update thumbnail list item styles ([#122](https://github.com/lonelyplanet/backpack-ui/pull/122))

## v3.4.1
- [update] Subdue card hover effect by removing shadow and scale ([#121](https://github.com/lonelyplanet/backpack-ui/pull/121))
- [update] Add fixed width and minHeight to card for short term fix of card size  ([#120](https://github.com/lonelyplanet/backpack-ui/pull/120))

## v3.4.0
- [update] Change height on Masthead component ([#118](https://github.com/lonelyplanet/backpack-ui/pull/118))
- [update] Update formatting in Author component ([#119](https://github.com/lonelyplanet/backpack-ui/pull/119))
- [update] Set AuthorName component's color to inherit its parent ([#119](https://github.com/lonelyplanet/backpack-ui/pull/119))
- [update] Add theme prop, dark theme styles to NewsArticleAuthor component ([#119](https://github.com/lonelyplanet/backpack-ui/pull/119))
- [update] Add style prop to TypeSelector component ([#119](https://github.com/lonelyplanet/backpack-ui/pull/119))
- [update] Update ThumbnailListItem component; change styles, use react-router Link, rename textBubble prop to runtime, import time util ([#119](https://github.com/lonelyplanet/backpack-ui/pull/119))
- [update] Make VideoEmbed component responsive, clean up formatting ([#119](https://github.com/lonelyplanet/backpack-ui/pull/119))
- [update] Update CardVideo with time utility to convert runtime prop to a human-readable format; change runtime prop from string to number; add runtimeUnit prop ([#117](https://github.com/lonelyplanet/backpack-ui/pull/117))
- [new] Create time utility to convert seconds and milliseconds to hours and minutes  ([#117](https://github.com/lonelyplanet/backpack-ui/pull/117))
- [new] Install humanize-duration module ([#117](https://github.com/lonelyplanet/backpack-ui/pull/117))
- [update] Add transparent color option to Button component ([#116](https://github.com/lonelyplanet/backpack-ui/pull/116))
- [update] Update scope for CardShelfVideoSwiper styles, offset bottom padding with negative bottom margin ([#114](https://github.com/lonelyplanet/backpack-ui/pull/114))
- [update] Add margin to SectionHeader component ([#115](https://github.com/lonelyplanet/backpack-ui/pull/115))

## v3.3.0
- [update] Use react-slick module for video card slider, delete swiper component ([#113](https://github.com/lonelyplanet/backpack-ui/pull/113))
- [update] Add theme to SectionHeading component ([#112](https://github.com/lonelyplanet/backpack-ui/pull/112))
- [new] Create shelf, swiper and grid components for cards and tiles ([#103](https://github.com/lonelyplanet/backpack-ui/pull/103))
- [new] Add tall carousel and slide components ([#109](https://github.com/lonelyplanet/backpack-ui/pull/109))
- [new] Add style prop to SectionHeader, SpotlightZone components; update styles ([#107](https://github.com/lonelyplanet/backpack-ui/pull/107))
- [update] Update SpotlightZone component styles ([#107](https://github.com/lonelyplanet/backpack-ui/pull/107))
- [new] Add VideoEmbed component ([#110](https://github.com/lonelyplanet/backpack-ui/pull/110), [#111](https://github.com/lonelyplanet/backpack-ui/pull/111))
- [new] Add segment component ([#108](https://github.com/lonelyplanet/backpack-ui/pull/108))

## v3.2.0
- [new] Create new component for video tile component which is an abstraction over `<CardVideo layout="tile" />` ([#106](https://github.com/lonelyplanet/backpack-ui/pull/106))
- [new] Create video tile component with poster sized image ([#106](https://github.com/lonelyplanet/backpack-ui/pull/106))
- [new] Add aspectRatio prop to CardVideo, change styles ([#106](https://github.com/lonelyplanet/backpack-ui/pull/106))
- [new] Add aspectRatio prop, sizes object to CardImage ([#106](https://github.com/lonelyplanet/backpack-ui/pull/106))
- [new] Create CardDescriptionPoster component ([#106](https://github.com/lonelyplanet/backpack-ui/pull/106))
- [update] Update styles for CardActionIcon, CardAnchor and CardDescription components ([#106](https://github.com/lonelyplanet/backpack-ui/pull/106))
  - Adjust font-size for CardActionIcon
  - Change left padding for CardAnchor
  - Move styles in CardDescription
- [update] Update clock icons ([#105](https://github.com/lonelyplanet/backpack-ui/pull/105))
- [new] Create Masthead component ([#102](https://github.com/lonelyplanet/backpack-ui/pull/102))
- [new] Create MastheadSlider component ([#102](https://github.com/lonelyplanet/backpack-ui/pull/102))
- [new] Create Slide component ([#102](https://github.com/lonelyplanet/backpack-ui/pull/102))
- [new] Install react-waypoint module ([#104](https://github.com/lonelyplanet/backpack-ui/pull/104))
- [new] Create Ad and AdLazyLoaded components ([#104](https://github.com/lonelyplanet/backpack-ui/pull/104))
- [update] Add lint script to package.json ([#101](https://github.com/lonelyplanet/backpack-ui/pull/101))
- [new] Add ellipsis, expand and photo icons ([#99](https://github.com/lonelyplanet/backpack-ui/pull/99))
- [new] Create SpotlightZone component ([#98](https://github.com/lonelyplanet/backpack-ui/pull/98))
- [new] Create SectionHeader component ([#98](https://github.com/lonelyplanet/backpack-ui/pull/98))
- [new] Add `extraThin` weight to Heading component ([#98](https://github.com/lonelyplanet/backpack-ui/pull/98))

## v3.1.0
- [new] Create `rgba` utility to output string for CSS ([#97](https://github.com/lonelyplanet/backpack-ui/pull/97))
- [new] Create Card components ([#97](https://github.com/lonelyplanet/backpack-ui/pull/97))
- [new] Create CardPrice component ([#97](https://github.com/lonelyplanet/backpack-ui/pull/97))
- [new] Create CardVideo component ([#97](https://github.com/lonelyplanet/backpack-ui/pull/97))
- [new] Create CardBasic component ([#97](https://github.com/lonelyplanet/backpack-ui/pull/97))
- [update] Update TextBubble ([#97](https://github.com/lonelyplanet/backpack-ui/pull/97))
- [new] Create CoverPhoto component (deprecates ImageHero) ([#97](https://github.com/lonelyplanet/backpack-ui/pull/97))
- [update] Add card prop, styles to Price component ([#97](https://github.com/lonelyplanet/backpack-ui/pull/97))
- [update] Update Play icon ([#97](https://github.com/lonelyplanet/backpack-ui/pull/97))
- [update] Add className to BulletDescription ([#97](https://github.com/lonelyplanet/backpack-ui/pull/97))

## v3.0.0
- [update] Remove "all" tag from TagList ([#96](https://github.com/lonelyplanet/backpack-ui/pull/96))
- [fix] Change `tags` propType validation in TagList to `arrayOf(shape)` to suppress warning ([#96](https://github.com/lonelyplanet/backpack-ui/pull/96))
- [new] Add `style` prop to TagList ([#96](https://github.com/lonelyplanet/backpack-ui/pull/96))
- [breaking] Move Bullet component from components/decoration to root components folder ([#95](https://github.com/lonelyplanet/backpack-ui/pull/95))
- [new] Add `style` prop to BulletDescription, make `description` prop required ([#95](https://github.com/lonelyplanet/backpack-ui/pull/95))
- [update] Use Bullet component in BulletDescription ([#95](https://github.com/lonelyplanet/backpack-ui/pull/95))
- [new] Add Camera icon ([#94](https://github.com/lonelyplanet/backpack-ui/pull/94))
- [update] Add missing exports to index.js ([#93](https://github.com/lonelyplanet/backpack-ui/pull/93))
- [update] Update path for Checkbox component ([#93](https://github.com/lonelyplanet/backpack-ui/pull/93))
- [new] Add ConfirmedCheckmark icon ([#90](https://github.com/lonelyplanet/backpack-ui/pull/90))
- [new] Add new props (`heading`, `calloutLabel`, `calloutHref`, `style`) to RecommendedArticles component ([#92](https://github.com/lonelyplanet/backpack-ui/pull/92))
- [breaking] Replace `children` prop with `articles` prop which accepts an array of
objects that define the articles for RecommendedArticles component ([#92](https://github.com/lonelyplanet/backpack-ui/pull/92))
- [new] Import core.css into Storybook to provide app-level styles ([#91](https://github.com/lonelyplanet/backpack-ui/pull/91))
- [new] Create ErrorMessages component ([#91](https://github.com/lonelyplanet/backpack-ui/pull/91))
- [new] Add error prop, styles to Input component ([#91](https://github.com/lonelyplanet/backpack-ui/pull/91))
- [new] Add `float` styles to form theme styles ([#91](https://github.com/lonelyplanet/backpack-ui/pull/91))
- [new] Create DisclaimerText component ([#89](https://github.com/lonelyplanet/backpack-ui/pull/89))
- [new] Create LocationLabel component ([#89](https://github.com/lonelyplanet/backpack-ui/pull/89))
- [new] Create UserProfileHeader component ([#89](https://github.com/lonelyplanet/backpack-ui/pull/89))
- [update] Update social network colors in settings ([#88](https://github.com/lonelyplanet/backpack-ui/pull/88))
- [new] Add Gear icon ([#88](https://github.com/lonelyplanet/backpack-ui/pull/88))
- [new] Add Google icon ([#88](https://github.com/lonelyplanet/backpack-ui/pull/88))
- [new] Add color versions of Facebook, Pinterest, Reddit and Twitter icons ([#88](https://github.com/lonelyplanet/backpack-ui/pull/88))
- [update] Update Instagram icon ([#88](https://github.com/lonelyplanet/backpack-ui/pull/88))
- [update] Update checkbox component ([#87](https://github.com/lonelyplanet/backpack-ui/pull/87))
  - Update size prop, styles; no longer accepts a keyword string, but rather a predefined size as a number
  - Remove inline callback and get values from event instead
  - Tightened up styles
  - Move to the root components/ folder but keep form/checkbox for backwards compatibility
- [new] Create Avatar component ([#85](https://github.com/lonelyplanet/backpack-ui/pull/85))
- [new] Create SocialLoginButton component ([#84](https://github.com/lonelyplanet/backpack-ui/pull/84))

## v2.0.0
- [new] Create TabbedNav component ([#83](https://github.com/lonelyplanet/backpack-ui/pull/83))
- [update] Update iconFromString utility and use it to replace `React.createElement(Icon)` ([#82](https://github.com/lonelyplanet/backpack-ui/pull/82), [#81](https://github.com/lonelyplanet/backpack-ui/pull/81))
- [new] Add ScrollIndicator component ([#78](https://github.com/lonelyplanet/backpack-ui/pull/78))
- [new] Add BulletDescription component ([#79](https://github.com/lonelyplanet/backpack-ui/pull/79))
- [new] Add TextBubble component ([#79](https://github.com/lonelyplanet/backpack-ui/pull/79))
- [new] Add ThumbnailListItem component ([#79](https://github.com/lonelyplanet/backpack-ui/pull/79))
- [new] Add `light` prop and styles to CategoryLabel ([#76](https://github.com/lonelyplanet/backpack-ui/pull/76))
- [new] Add clock outline icon ([#77](https://github.com/lonelyplanet/backpack-ui/pull/77))
- [fix] Clean up Bookmark component ([#75](https://github.com/lonelyplanet/backpack-ui/pull/75))
  - Fix rendering, styles
  - Add `style` prop
  - Remove `center`, `align` props; positioning can be passed in via `style` prop
- [new] Create article pagination components ([#74](https://github.com/lonelyplanet/backpack-ui/pull/74))
- [new] Add alternate arrow icons ([#74](https://github.com/lonelyplanet/backpack-ui/pull/74))
- [breaking] Delete styled-components dependency and use Radium for all components moving forward. Currently, styled-components doesn't support server rendering, so it cannot be used. ([#73](https://github.com/lonelyplanet/backpack-ui/pull/73))
- [update] Add knobs to Newsletter story ([#69](https://github.com/lonelyplanet/backpack-ui/pull/69))

## v1.3.0
- [new] Install storybook-addon-knobs, update storybook ([#68](https://github.com/lonelyplanet/backpack-ui/pull/68))
- [update] Change default `tracking` value from an empty string to “normal” to be
consistent with other props in Heading component ([#68](https://github.com/lonelyplanet/backpack-ui/pull/68))
- [new] Create SocialShareContainer component which is responsible for containing data and events for social sharing components ShareMenu and SocialShare ([#67](https://github.com/lonelyplanet/backpack-ui/pull/67))
- [new] Create SocialIconButton component; used in SocialShare component ([#67](https://github.com/lonelyplanet/backpack-ui/pull/67))
- [new] Create SocialShare component ([#67](https://github.com/lonelyplanet/backpack-ui/pull/67))
- [update] Update ShareMenu component and move logic for social links and pop-up windows out; use SocialShareContainer ([#67](https://github.com/lonelyplanet/backpack-ui/pull/67))
- [new] Add colors to setting for Facebook Messenger and Reddit social networks ([#67](https://github.com/lonelyplanet/backpack-ui/pull/67))
- [update] Add `size` prop to ListItemNews component with small and medium sizes ([#66](https://github.com/lonelyplanet/backpack-ui/pull/66))
- [new] Add Facebook Messenger and Reddit icons ([#65](https://github.com/lonelyplanet/backpack-ui/pull/65))
- [update] Reduce stroke width on MouseOutline icon ([#65](https://github.com/lonelyplanet/backpack-ui/pull/65))

## v1.2.3
- [new] Add mouse-outline icon ([#64](https://github.com/lonelyplanet/backpack-ui/pull/64))

## v1.2.2

- [new] Add TravelAlert component ([#63](https://github.com/lonelyplanet/backpack-ui/pull/63))
- [new] Add Logo component ([#63](https://github.com/lonelyplanet/backpack-ui/pull/63))
- [new] Add logo icon ([#63](https://github.com/lonelyplanet/backpack-ui/pull/63))
- [new] Add mouse icon ([#62](https://github.com/lonelyplanet/backpack-ui/pull/62))
- [new] Add MIT license ([#61](https://github.com/lonelyplanet/backpack-ui/pull/61))
- [fix] Add prepublish script to run build script; fixes a bug where `dist` folder wouldn't be updated with new components ([#60](https://github.com/lonelyplanet/backpack-ui/pull/60))

## v1.2.1
- [update] Update Newsletter styles ([#59](https://github.com/lonelyplanet/backpack-ui/pull/59))

## v1.2.0
- [update] Update FeaturedCallout ([#58](https://github.com/lonelyplanet/backpack-ui/pull/58))
  - Move `position: relative` onto styles.container; previously this rule was being passed in via the `style` prop
  - Update heading spacing styles
  - Remove `width` prop
- [update] Add `constrained` prop and styles to FeaturedArticle to constrain width and height ([#58](https://github.com/lonelyplanet/backpack-ui/pull/58))
- [new] Add GridRow and GridColumn components ([#57](https://github.com/lonelyplanet/backpack-ui/pull/57))
- [new] Create new components using styled-components for Travel News app ([#56](https://github.com/lonelyplanet/backpack-ui/pull/56))
  - AuthorName
  - ItalicText
  - Author
  - Timestamp
  - NewsArticleAuthor

## v1.1.4
- [fix] Fix font color for CategoryLabel and CalloutLink components in FeaturedCallout ([#55](https://github.com/lonelyplanet/backpack-ui/pull/55))

## v1.1.3
- [update] Update CategoryLabel component; simplify component, use `children` prop ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))
- [new] Create SponsorLabel and CategoryLabelLink components; based off of CategoryLabel ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))
- [update] Update CalloutLink component; use `children` prop ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))
- [update] Update CategoryLabel and CalloutLink components in FeaturedCallout to use `children` prop ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))
- [new] Create ArticlePreview component ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))
- [new] Create RecommendedArticles component ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))

## v1.1.2
- [new] Add ListContainer, NewsList components ([#53](https://github.com/lonelyplanet/backpack-ui/pull/53))

## v1.1.1
- [new] Add CONTRIBUTING.md ([#52](https://github.com/lonelyplanet/backpack-ui/pull/52))
- [update] Update README.md; change "usage" section to reflect recommended method to import components, change heading hierarchy ([#52](https://github.com/lonelyplanet/backpack-ui/pull/52), [#51](https://github.com/lonelyplanet/backpack-ui/pull/51))
- [update] Add missing imports to src/index.js so components can be imported like `import { Button } from backpack-ui;`, despite this not being the recommended method of importing components ([#51](https://github.com/lonelyplanet/backpack-ui/pull/51))
- [new] Add Newsletter component ([#50](https://github.com/lonelyplanet/backpack-ui/pull/50))

## v1.1.0
- [new] Add a group of new components ([#49](https://github.com/lonelyplanet/backpack-ui/pull/49))
  - CalloutLink
  - CategoryLabel
  - FeaturedArticle
  - FeaturedCallout
  - FeaturedSectionHeading
  - GradientOverlay
  - HeroImageContainer
  - HideAtBreakpoint
  - ListItemNews
  - ListItemThumbnail
  - PromotedGuidebook
  - SectionalNav
- [new] Install react-scroll and react-stickynode dependencies for SectionalNav component ([#49](https://github.com/lonelyplanet/backpack-ui/pull/49))
- [new] Add new color "crusta", hex `#ff882e` ([#49](https://github.com/lonelyplanet/backpack-ui/pull/49))

## v1.0.6
- [fix] Rename `link` prop to `url` and make it a string in IconCallout component ([#48](https://github.com/lonelyplanet/backpack-ui/pull/48))

## v1.0.5
- [new] Add `mouseenter` and `mouseleave` events as props to SightsListItem component ([#47](https://github.com/lonelyplanet/backpack-ui/pull/47))
- [new] Allow InteractiveMap component to receive props via `componentWillReceiveProps` to change active marker and add `activeMarker` prop ([#47](https://github.com/lonelyplanet/backpack-ui/pull/47))
- [fix] Remove relative link path for SightsListItem component ([#46](https://github.com/lonelyplanet/backpack-ui/pull/46))

## v1.0.4
- [fix] Adjust spacing, sizing for IconCalloutGroup component ([#45](https://github.com/lonelyplanet/backpack-ui/pull/45))

## v1.0.3
- [fix] Make icons in story more visible ([#44](https://github.com/lonelyplanet/backpack-ui/pull/44))
- [fix] Resize survival guide icons to use 32px viewbox instead of 1024px; this is consistent with all other icons ([#44](https://github.com/lonelyplanet/backpack-ui/pull/44))
- [new] Add survival guide icons for speech bubbles and passport ([#44](https://github.com/lonelyplanet/backpack-ui/pull/44))

## v1.0.2
- [fix] IconCallout component's text was overflowing its container in IE 11 due to flexbox layout. Flexbox was used in order to keep the MoreLink pinned to the bottom of the container, but that dependency is no longer being used and has been removed. ([#43](https://github.com/lonelyplanet/backpack-ui/pull/43))
- [fix] Fix some linting errors in InteractiveMap component by setting some methods to static and re-ordering source order of methods ([#42](https://github.com/lonelyplanet/backpack-ui/pull/42))
- [new] Give InteractiveMap container's a max-width of 100%; use colors from settings ([#42](https://github.com/lonelyplanet/backpack-ui/pull/42))
- [new] Add `style` prop to InteractiveMap component ([#42](https://github.com/lonelyplanet/backpack-ui/pull/42))

## v1.0.1
- [fix] Suppress Radium warning in NumberMarker component ([#41](https://github.com/lonelyplanet/backpack-ui/pull/41))
- [new] Add letter spacing to Button and MoreLink components ([#41](https://github.com/lonelyplanet/backpack-ui/pull/41))
- [new] Add `xSmall` size to NumberMarker component ([#41](https://github.com/lonelyplanet/backpack-ui/pull/41))


## v1.0.0
- Remove alpha label from version
