import { ethers } from "ethers";
import { provider } from "../magic";
import Update from "./Update.json";

export const UpdateInstance = new ethers.Contract(
  "0xb7a854c1ebc50ce9085f64fe90f993375d398fdc",
  Update,
  provider
);
