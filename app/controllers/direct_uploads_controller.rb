class DirectUploadsController < ActiveStorage::DirectUploadsController
    skip_before_action :verify_authenticity_token, only: [:create]
    # skip before action is apparently the only way to prevent a 422 csrf error?  still showing errors
    

    def create
        # blob = ActiveStorage::Blob.create_before_direct_upload!(blob_args)
        byebug
    end

    private

    def blob_args
        params.permit(:avatar, :byte_size, :checksum, :content_type, metadata: {})
    end

end

# this controller is depreceiated in favor of the direct_uploads_controller located in the api folder