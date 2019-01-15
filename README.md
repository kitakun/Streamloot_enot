### Streamloot_enot
Enot streamloot web-client for [Streamloot e-commerce](https://github.com/kitakun/Streamloot).

##### What currently implemented?
- Bundle products carousel
- Preview what in bundles
- Placing bundles in cart with choosing attributes of any products in bundles
- Editing attributes in cart
- Editing cart
- Placing order
- Tracking order status
- Filtering cities for knowing how much will cost delivery

##### What currently NOT implemented?
- Load/upload products images
- Preview of every product in bundle
- Include CDEK widget for calculating delivery price
- On placing order show under scroll what we will buy
- Improve panels graphically (not all images are done)
- Start implementing admin page for adding/editing bundles/products (make devided project)

##### Structure of project

 * app
    * `components`  - standalone components
        * `chests`  - bundles are chests
        * `feature` - single feature: e.g. track-order panel
        * `shared`  - features like 'background video'
    * `Interceptors`  - project middlewares
    * `Models`        - all models used in project
    * `pages`         - route pages components
    * `services`      - static services like alerts
    * `Styles`        - static base styles

## TODO
1. Different page for streamer - notification for ClrBrowser about ordering something with message