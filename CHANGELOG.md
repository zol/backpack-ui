# Change log

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
