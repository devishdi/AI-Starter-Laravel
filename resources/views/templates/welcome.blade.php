@extends('template_main')
@section('content')
<div class="flex md-flex-row">
   <section class="flex-6">Slider</section>
   <section class="flex-6">
      <form class="register-form flex flex-col mt-7 mb-7 justify-items-center items-center">
         <div class="basis-full md:basis-1/3 mb:ml-5 w-full mt-5 form-input-container">
            <select name="profle_for" id="profle_for" class="md:w-1/2 w-full rounded-full form-select" placeholder="Profile creating for">
               <option value="son">My Son</option>
               <option value="daughter">My Daughter</option>
               <option value="sister">My Sister</option>
               <option value="brother">My Brother</option>
               <option value="cousine_sister">My Cousine Sister</option>
               <option value="cousine_bother">My Cousine Brother</option>
               <option value="grant_daughter">My Grand Daughter</option>
               <option value="nep">My Grand Son</option>
               <option value="grant_son">My Grand Son</option>
               <option value="grant_son">My Grand Son</option>
               <option value="grant_son">My Grand Son</option>
            </select>
         </div>
         <div class="basis-full md:basis-1/3 w-full mt-5 form-input-container">
            <input id="email" name="email" class="md:w-1/2 w-full rounded-full form-input" type="text" placeholder="Email">
         </div>
         <div class="basis-full md:basis-1/3 w-full mt-5 form-input-container">
            <input id="mobile" name="mobile" class="md:w-1/2 w-full rounded-full form-input" type="text" placeholder="Mobile">
         </div>
         <div class="basis-full md:basis-1/2 w-full mt-5 form-input-container">
            <input id="name" name="name" class="md:w-1/2 w-full rounded-full form-input" type="text" placeholder="His / Her Name">
         </div>
         <div class="basis-full md:basis-1/2 w-full mt-5 form-input-container">
            <select name="religion" id="religion" class="md:w-1/2 w-full rounded-full form-select" placeholder="Religion">
               <option value="sunni">Sunni</option>
               <option value="shia">Shia</option>
            </select>
         </div>
         <div class="basis-full md:basis-1/2 w-full mt-5 form-input-container">
            <input id="age" name="age" class="md:w-1/2 w-full rounded-full form-input" type="text" placeholder="His / Her Age">
         </div>
         <div class="basis-full md:basis-1/2 w-full mt-5 form-input-container">
            <input id="register" name="register" class="md:w-1/3 w-1/3 rounded-full btn btn-login" type="submit" value="Register">
         </div>
      </form>
   </section>
</div>
<div class="flex flex-row">
   <section></section>
</div>
@endsection