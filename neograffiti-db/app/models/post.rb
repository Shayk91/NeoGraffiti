class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  validates :image, presence: true
  attr_accessor :timedistance
  def attributes
    super.merge({'timedistance' => timedistance})
  end
end
