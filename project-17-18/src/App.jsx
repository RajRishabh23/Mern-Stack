import { useState } from "react";
import { PRODUCTS_INFO } from "./data";
import { BrandNames } from "./data";
import { CUSTOMER_DATA } from "./data";
import Header from "./components/Header";
import ProductsInfo from "./components/ProductsInfo";
import TabButton from "./components/TabButton";
import CustomerData from "./components/CustomerData";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Maruti");
  const [selectedUser, setSelectedUser] = useState("Raj");

  function handleSelect (selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  function handleSelectedUser (selectedUser) {
    console.log(selectedUser);
    setSelectedUser(selectedUser);
  }

  let tabContent = '';
  let userContent = '';

  if (selectedTopic) {
    tabContent = (
          <div id="tab-content">
            <h3>{BrandNames[selectedTopic].title}</h3>
            <p>{BrandNames[selectedTopic].description}</p>
          </div>
    );
  } else {
    tabContent = <p>please select a topic</p>;
  }


  if (selectedUser) {
    userContent = (
      <div id="user-content">
        <h3>{CUSTOMER_DATA[selectedUser].fullName}</h3>
        <h4>{CUSTOMER_DATA[selectedUser].emailAddress}</h4>
        <h4>{CUSTOMER_DATA[selectedUser].mobileNumber}</h4>
      </div>
    );
  } else {
    userContent = <p>please select any customer</p>
  }

  return (
    <div>
      <Header />

      <main>
        <section id="products-info">
          <h2>Car details</h2>
          
          <ul>
            <ProductsInfo 
              productId = {PRODUCTS_INFO[0].productId} 
              productName = {PRODUCTS_INFO[0].productName} 
              productDescription = {PRODUCTS_INFO[0].productDescription}
              productImage  = {PRODUCTS_INFO[0].productImage} 
              productPrice = {PRODUCTS_INFO[0].productPrice} 
            />

            <ProductsInfo {...PRODUCTS_INFO[1]} />
            <ProductsInfo {...PRODUCTS_INFO[2]} />
          </ul>
          
        </section>

        <section id="users-data">
          <h2>Customer Data</h2>

          <ul>
            <CustomerData onSelectUser = {() => handleSelectedUser(CUSTOMER_DATA["Raj"].fullName)}>{CUSTOMER_DATA["Raj"]["fullName"]}</CustomerData>
            <CustomerData onSelectUser = {() => handleSelectedUser(CUSTOMER_DATA["Amit"].fullName)}>{CUSTOMER_DATA["Amit"].fullName}</CustomerData>
            <CustomerData onSelectUser = {() => handleSelectedUser(CUSTOMER_DATA["Aman"].fullName)}>{CUSTOMER_DATA["Aman"].fullName}</CustomerData>
            <CustomerData onSelectUser = {() => handleSelectedUser(CUSTOMER_DATA["Ankit"].fullName)}>{CUSTOMER_DATA["Ankit"].fullName}</CustomerData>
          </ul>
        </section>

        {userContent}

        <section id="examples">
          <h2>Brands Names</h2>

          <menu>
            <TabButton isSelected = {selectedTopic === "Maruti"} onSelect = {() => handleSelect("Maruti")}>
              Maruti
            </TabButton>
            <TabButton isSelected = {selectedTopic === "Hyundai"} onSelect = {() => handleSelect("Hyundai")}>
              Hyndai
            </TabButton>
            <TabButton isSelected = {selectedTopic === "Tata"} onSelect = {() => handleSelect("Tata")}>
              Tata
            </TabButton>
            <TabButton isSelected = {selectedTopic === "Mahindra"} onSelect = {() => handleSelect("Mahindra")}>
              Mahindra
            </TabButton>
          </menu>

          {/* {selectedProduct} */}

          {tabContent}
        </section>

      </main>
    </div>
  );
}

export default App;