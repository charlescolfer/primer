class SongUploader < CarrierWave::Uploader::Base
  storage :fog
end
