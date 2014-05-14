require 'json'
class ApiController < ApplicationController
	def bloo
		id = params[:blue]
		name = params[:devil]
		p id + ' | ' + name
		head :ok
	end
end