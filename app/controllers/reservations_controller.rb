class ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
  end

  def new
    @reservation = Reservation.new
  end

  def show
  end

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      redirect_to reservations_path(@reservation)
    else
    render :new
    end
  end

private

  def reservation_params
    params.require(:reservation).permit(:name)
  end

end
