export type ProductLink = {
  title: string,
  image: string,
	category?: "tools" | "creator tools" | "ingredients" | string,
  links?: {
    shopee?: string,
    blibli?: string,
    tokopedia?: string
  }
}