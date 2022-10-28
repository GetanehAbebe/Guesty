import { Router, Response, Request } from "express";
import { GENDER_API, NATIONALITY_API } from "../config";
const router = Router();
interface Country {
  country_id: string;
  probability: number;
}

interface Countries {
  countries: Country[];
}

interface User {
  name?: string;
  countries?: Countries;
  gender?: string;
}

router.get("/", async (req: Request, res: Response) => {
  const { name } = req.query;
  try {
    const namesAnalyzerApi = [GENDER_API, NATIONALITY_API];
    const result = await Promise.all(
      namesAnalyzerApi.map((api) => {
        return fetch(`${api}?name=${name}`).then((res) => res.json());
      })
    );
    let user: User = {} as User;

    result.forEach((item) => {
      if (item.country) {
        user.countries = item.country.map(
          ({ country_id }: Country) => country_id
        );
      } else if (item.count) {
        const { name, gender } = item;
        user.name = name;
        user.gender = gender;
      }
    });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

export default router;
