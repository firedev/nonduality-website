class Button < Bridgetown::Component
  attr_reader :href, :icon, :target, :rel

  def initialize(icon: "document/file-text-fill", href: nil, target: nil, rel: nil)
    @icon = icon
    @href = href
    @target = target
    @rel = rel || (target == "_blank" ? "noopener" : nil)
  end
end
