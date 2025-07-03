from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.gpt import generate_ad_copy

router = APIRouter()

class AdRequest(BaseModel):
    product_name: str
    description: str
    target_audience: str

@router.post("/generate")
def generate_ad(request: AdRequest):
    try:
        ad = generate_ad_copy(
            product_name=request.product_name,
            description=request.description,
            audience=request.target_audience
        )
        return {"ad": ad}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
