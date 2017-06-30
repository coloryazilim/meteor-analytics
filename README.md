## meteor-analytics


### Add Package 
    meteor add color:analytics
    
### Use
```JS
import { GoogleAnalytics } from 'meteor/color:analytics';

// create 
GoogleAnalytics.create('UA-XXXXXXXX-X');

// iron router
Router.configure({
  onAfterAction() {
    GoogleAnalytics.pageview(this.location.get());
  }
})
```
