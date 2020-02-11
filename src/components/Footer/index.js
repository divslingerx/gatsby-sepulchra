import React from "react"
import { MenuList, Wrapper } from "./styles"
import { Z_BLOCK } from "zlib";

const Footer = () => (
    <footer>
        <Wrapper>

            <div>
                <MenuList>
                    <li>Instagram</li>
                </MenuList>
            </div>
            <div>
                <MenuList>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Meet The Designer</li>
                    <li>Contact</li>
                </MenuList>
            </div>
            <div>
                <MenuList>
                    <li>Shipping &amp; Returns</li>
                    <li>Jewelry Care</li>
                    <li>Privacy Policy</li>
                    <li>Search</li>
                </MenuList>
            </div>
            <div>
                <div>
                    <div>Stay up on great deals</div>
                    <p>You won't want to miss exclusive collection sneak peeks, once-in-a-lifetime deals, & all things Sepulchra!</p>
                    <input type="email" placeholder="Enter your email" />
                </div>

            </div>

        </Wrapper>
    </footer >
)

export default Footer