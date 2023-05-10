class Api::DirectUploadsController < ActiveStorage::DirectUploadsController
    # Should only allow null_session in API context, so request is JSON format
    protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  
    # Also, since authenticity verification by cookie is disabled, you should implement you own logic :
    # before_action :verify_user
    skip_before_action :verify_authenticity_token, only: [:create]

    def create
        blob = ActiveStorage::Blob.create_before_direct_upload!(blob_args)
        # byebug
        render json: direct_upload_json(blob)
    end
  
    private
  
    # def verify_user
    #   raise unless User.find(doorkeeper_token[:resource_owner_id])
    # end

    def direct_upload_json(blob)
        blob.as_json(root: false, methods: :signed_id).merge(service_url: url_for(blob)).merge(direct_upload: {
            url: blob.service_url_for_direct_upload,
            headers: blob.service_headers_for_direct_upload
        })
    end

  end