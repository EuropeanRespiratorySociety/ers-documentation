(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{181:function(e,t,i){e.exports=i.p+"assets/img/Cloud_CMS_notifications.c13e8533.png"},182:function(e,t,i){e.exports=i.p+"assets/img/Notifications-form.1d59b800.png"},183:function(e,t,i){e.exports=i.p+"assets/img/Full_notification.398ba04d.png"},184:function(e,t,i){e.exports=i.p+"assets/img/notification-screen.5f1c0c80.png"},185:function(e,t,i){e.exports=i.p+"assets/img/date-picker.f2ae81d8.png"},186:function(e,t,i){e.exports=i.p+"assets/img/notification-175.dbf7e8cf.png"},187:function(e,t,i){e.exports=i.p+"assets/img/Document_Overview.89af3e46.png"},188:function(e,t,i){e.exports=i.p+"assets/img/sucess.f3cdab91.png"},189:function(e,t,i){e.exports=i.p+"assets/img/not-allowed.93a50d38.png"},190:function(e,t,i){e.exports=i.p+"assets/img/api-notifications.706c35a3.png"},195:function(e,t,i){"use strict";i.r(t);var n=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notifications","aria-hidden":"true"}},[e._v("#")]),e._v(" Notifications")]),e._v(" "),n("p",[e._v('It is now possible to send push notifications to the ERS Connect app.\nOnly certain users of the CMS can send notifications. You can request "notifications rights" by contacting the IT department.')]),e._v(" "),n("p",[e._v("Notifications can be found under "),n("code",[e._v("content -> notifications")]),e._v(" "),n("img",{attrs:{src:i(181),alt:"notifications"}})]),e._v(" "),n("h2",{attrs:{id:"create-a-notification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-a-notification","aria-hidden":"true"}},[e._v("#")]),e._v(" Create a notification")]),e._v(" "),n("p",[e._v("Notifications can be created as with any other content type by clicking on Create Content\n"),n("img",{attrs:{src:i(182),alt:"Notification forms"}})]),e._v(" "),n("p",[e._v("Fill in the form as you would for an article (details of the field below). Note that the notification will "),n("strong",[e._v("not be sent")]),e._v(" when you click on the create button. The reason is to prevent sending inadvertently notifications. Therefore, when the notification has been created, open it, review it and make sure everything is as you intended, change the setting of the publish tick box and save the notification. Saving the notification associated with the publish tick box, sends/schedules it.")]),e._v(" "),n("h2",{attrs:{id:"publish-sent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#publish-sent","aria-hidden":"true"}},[e._v("#")]),e._v(" Publish / Sent")]),e._v(" "),n("p",[e._v("When the notification is created it is a draft, nothing is sent until the notification is changed (updated by saving it again) and the "),n("code",[e._v("publish")]),e._v(" tick box is checked. The workflow is to leave "),n("code",[e._v("publish")]),e._v(" unchecked, fill in the form and hit create. Then open the created notification, review it and make sure there is no mistake, then check the "),n("code",[e._v("publish")]),e._v(" tick box and save the content item. The action of saving the content item with the "),n("code",[e._v("publish")]),e._v(" check box "),n("code",[e._v("checked")]),e._v(" triggers the notification. There is no way back. (more on this later)")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("sent")]),e._v(" property is a “system” property and it will prevent sending the same notification twice. It cannot be changed, and it is updated when the notification has been successfully sent.")]),e._v(" "),n("p",[e._v("Let’s now see all the options:\n"),n("img",{attrs:{src:i(183),alt:"Full notification"}})]),e._v(" "),n("p",[e._v("This is a notification that has already be sent (the "),n("code",[e._v("sent")]),e._v(" checkbox is checked)")]),e._v(" "),n("h2",{attrs:{id:"title-body"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#title-body","aria-hidden":"true"}},[e._v("#")]),e._v(" Title / Body")]),e._v(" "),n("p",[e._v("The title and the body are displayed as follow:\n"),n("img",{attrs:{src:i(184),alt:"Notification on Phone"}})]),e._v(" "),n("ul",[n("li",[e._v("(1) Title")]),e._v(" "),n("li",[e._v("(2) Body\nThe "),n("code",[e._v("title")]),e._v(" is limited to "),n("code",[e._v("50")]),e._v(" characters and the "),n("code",[e._v("body")]),e._v(" to "),n("code",[e._v("100")]),e._v(".  The spotme icon will be changed to an ERS one in an upcoming build.")])]),e._v(" "),n("h2",{attrs:{id:"notification-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notification-type","aria-hidden":"true"}},[e._v("#")]),e._v(" Notification Type")]),e._v(" "),n("p",[e._v("There are two types to choose from "),n("code",[e._v("push")]),e._v(" and "),n("code",[e._v("schedule")]),e._v(". Push notification are sent right away, to everyone who matches (see below). There is no way back for push notifications when the "),n("code",[e._v("publish")]),e._v(" tick box is checked and you save the content item the notification is sent.")]),e._v(" "),n("p",[e._v("You can schedule notification, they will be sent to the users in "),n("strong",[e._v("their time zone")]),e._v(", in order for the scheduling to work, notification need to be scheduled "),n("strong",[e._v("at least 24 hours in advance")]),e._v(". Scheduled notification can be cancelled, for now there is no integrated way of doing this, but you can send me the "),n("code",[e._v("id")]),e._v(" (see below) of the notification and I will cancel it manually.")]),e._v(" "),n("p",[e._v("If the "),n("code",[e._v("schedule")]),e._v(" option is selected a date/time fields appears with a picker when you click on it. You can select the date, then by clicking on the clock icon at the bottom of the calendar, select the time of the notification:\n"),n("img",{attrs:{src:i(185),alt:"Notification on Phone"}})]),e._v(" "),n("h2",{attrs:{id:"channels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[e._v("#")]),e._v(" Channels")]),e._v(" "),n("p",[e._v("There are, for now 5 channels:")]),e._v(" "),n("ol",[n("li",[e._v("Alerts")]),e._v(" "),n("li",[e._v("ERS events")]),e._v(" "),n("li",[e._v("ERS highlights")]),e._v(" "),n("li",[e._v("ERS news")]),e._v(" "),n("li",[e._v("ERS vision")])]),e._v(" "),n("p",[e._v("Channels are ways to let our user subscribe to notification topics that might interest them. If a user has deactivated in the setting of the app ERS events and you send a notification to ERS events, that person will not receive it.")]),e._v(" "),n("p",[e._v("Alerts are considered “general notifications” the other speak for themselves. If we need another channel, it can be added at any time.")]),e._v(" "),n("h2",{attrs:{id:"ers-members-and-myers-accounts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ers-members-and-myers-accounts","aria-hidden":"true"}},[e._v("#")]),e._v(" ERS Members and myErs accounts")]),e._v(" "),n("p",[e._v("These options will limit the notification to ERS Members and/or app users logged in with a myERS account. If you select only Members Only and myERS accounts Only, both groups will receive the notification, but it does not really make sense as Members are included in myERS accounts holder. It is interesting to use for members only or for myERS account holders.")]),e._v(" "),n("p",[e._v("Using these checkboxes with interests (see below) will limit each of the selected interest to ERS members or myERS account holders.")]),e._v(" "),n("h2",{attrs:{id:"content-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#content-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Content types")]),e._v(" "),n("p",[e._v("There are two types: "),n("code",[e._v("Article")]),e._v(" and "),n("code",[e._v("Link")]),e._v(". "),n("code",[e._v("Article")]),e._v(" will let you choose an article from the CMS, the article will open natively in the app as any other content.")]),e._v(" "),n("p",[n("code",[e._v("Link")]),e._v(" on the other hand, will let you paste/type any full URL including http or https protocol. These will open in the app as a Webview (stripped down browser in the app) inside the app. Therefore, you can link to any website and it will open inside the app. It can be interesting to share journal articles, CME online modules, or any other content.")]),e._v(" "),n("h2",{attrs:{id:"interests"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#interests","aria-hidden":"true"}},[e._v("#")]),e._v(" Interests")]),e._v(" "),n("p",[e._v("These options will target user by interests (Diseases and Methods). Select any of them and all people that have one interest that match will be targeted. Consider this selection as an OR. If you select ERS members and a few interests, then it will limit each interest to ERS members (same thing for myERS account holders)")]),e._v(" "),n("p",[e._v("The following schema describes what has been described above as ensembles:\n"),n("img",{attrs:{src:i(186),alt:"Groups"}})]),e._v(" "),n("p",[e._v("Examples:\n"),n("code",[e._v("Airway disesase")]),e._v(" OR "),n("code",[e._v("Thoracic Oncology")]),e._v(".\n"),n("code",[e._v("Airway disesase")]),e._v("  AND "),n("code",[e._v("ERS member")]),e._v(" OR "),n("code",[e._v("Thoracic Oncology")]),e._v(" AND "),n("code",[e._v("ERS Member")]),e._v(".")]),e._v(" "),n("p",[e._v("After sending a notification, you will have some feedback in the comment section of the content item:")]),e._v(" "),n("ol",[n("li",[e._v("Click on Overview and")]),e._v(" "),n("li",[e._v("Scroll down to the comments\n"),n("img",{attrs:{src:i(187),alt:"Overview"}})])]),e._v(" "),n("p",[e._v("There you will find different comments:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Everything went well:")]),e._v(" "),n("p",[n("img",{attrs:{src:i(188),alt:"Sucess"}})]),e._v(" "),n("p",[e._v("The string in the red box is the id that I would need to cancel the scheduled notification")])]),e._v(" "),n("li",[n("p",[e._v("Not allowed")]),e._v(" "),n("p",[n("img",{attrs:{src:i(189),alt:"Not Allowed"}})])])]),e._v(" "),n("p",[e._v("The user name of the person who attempted to send a notification will be written in the comment box\n3. Attempting to re send a notification will trigger this comment:")]),e._v(" "),n("pre",[n("code",[e._v("![Aborting](./img/notifications/aborting.png)\n")])]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("I there are any other error, they will also be printed in comments, please let me know if something happens.")])]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Note that I have changed the icon for the sake of clarity. Comments written by the API now look like this:")]),e._v(" "),n("p",[n("img",{attrs:{src:i(190),alt:"Nice icon"}})])]),e._v(" "),n("p",[e._v("Allowed users\nThe following users can send notifications (new user can be added)")]),e._v(" "),n("ol",[n("li",[e._v("Dawn")]),e._v(" "),n("li",[e._v("Beth")]),e._v(" "),n("li",[e._v("Tamaki")]),e._v(" "),n("li",[e._v("Stéphane")]),e._v(" "),n("li",[e._v("Samuel")])]),e._v(" "),n("p",[e._v("The main users of this feature should be Dawn and Beth, we are in this list to cover for vacation and/or unavailability of someone from the communication team.")]),e._v(" "),n("h3",{attrs:{id:"todos"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#todos","aria-hidden":"true"}},[e._v("#")]),e._v(" TODOS")]),e._v(" "),n("ul",[n("li",[n("input",{attrs:{type:"checkbox",id:"checkbox3"}}),n("label",{attrs:{for:"checkbox3"}},[e._v("Implement cancellation from CMS")])]),e._v(" "),n("li",[n("input",{attrs:{type:"checkbox",id:"checkbox4"}}),n("label",{attrs:{for:"checkbox4"}},[e._v("If needed implement more filtering options and conditional rules")])]),e._v(" "),n("li",[n("input",{attrs:{type:"checkbox",id:"checkbox5"}}),n("label",{attrs:{for:"checkbox5"}},[e._v("For now, we can send programmatically notifications to ERS IDs this is potentially very interesting as we can target people when their membership expires, when they have a new certificate, when their abstracts are accepted and so on. I could also add this to the UI. There is a small complexity, we need to know if the user has the app installed or not. (We have the info, we just need to find a way to share, maybe add to the CRM)")])])])])}],o=i(0),a=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);a.options.__file="publish-a-notification.md";t.default=a.exports}}]);