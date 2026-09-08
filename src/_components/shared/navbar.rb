class Shared::Navbar < Bridgetown::Component
  def initialize(metadata:, resource:)
    @metadata, @resource = metadata, resource
    @site = Bridgetown::Current.site
  end

  def homepage?
    @resource.relative_url == "/"
  end
end
