require File.expand_path('config/environment', __dir__)

for a in ("a".."z")
  for b in ("a".."z")
    for c in (0..9)
      for d in (0..9)
        for e in (0..9)
          p "#{a}#{b}#{c}#{d}#{e}".upcase()
        end
      end
    end
  end
end
