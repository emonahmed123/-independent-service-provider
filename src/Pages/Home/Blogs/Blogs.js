import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='Blogs text-center'>
            <h1 className='text-center mt-2' >Blogs</h1>
             <div>
           <h3>Authentication vs. Authorization </h3>
     
                  <p>
                  Authentication ব্যবহারকারী কে তা যাচাই করে। <br/>  Authorization  নির্ধারণ করে কোন ব্যবহারকারী কোন রিসোর্স অ্যাক্সেস করতে পারে।<br/>
                
                 পাসওয়ার্ড, ওয়ান-টাইম পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা প্রদত্ত বা প্রদত্ত অন্যান্য তথ্যের মাধ্যমে  Authentication  কাজ করে।<br/>
                 Authorization সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থার দ্বারা বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা হয়।  
                  
                  </p>
             </div>
         
         <div>
                  <h3>why you use firebaseAuthentication</h3>

         <p>
  
         আমি firebaseAuthentication   ব্যবহার    করি কারণ   firebaseAuthentication যেকোনো প্ল্যাটফর্মের জন্য নিরাপদ সাইন-ইন তৈরি করা সহজ করে তোলে।
         <br/> এই এন্ড-টু-এন্ড সমাধান ইমেল এবং পাসওয়ার্ড, ফোন Authentication এবং মাল্ট-প্ল্যাটফর্ম লগইন সমর্থন করে। 
</p>
            <li>
                
         ফায়ারবেস বিকল্প
            1 Back4App.
            2 Kinvey.
           3 Backendless.
          4 Kuzzle.
          5 Pubnub.
          6 Kumulos.
       7 Game Sparks.
         8 Hoodie.

            </li>
         </div>
                <div className='mt-5'>
                       <h4>ফায়ারবেস প্রদান করে Authentication  এর মতো  এমন অনেকগুলি service রয়েছে যার মধ্যে সবচেয়ে দরকারী হল</h4>

                <p>Cloud Firestore.
Cloud Functions.
Hosting.
Cloud Storage.
Google Analytics.
Predictions.
Cloud Messaging.</p> 
                
                </div>

        </div>
    );
};

export default Blogs;