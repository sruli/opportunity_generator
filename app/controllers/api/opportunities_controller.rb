module Api
  class OpportunitiesController < ApplicationController
    def index
      render json: Opportunity.all.order('created_at DESC')
    end

    def create
      Opportunity.create(create_opportunity_params)
      render json: {}
    end

    private

    def create_opportunity_params
      params.require(:opportunity).permit(:uuid, :content)
    end
  end
end
