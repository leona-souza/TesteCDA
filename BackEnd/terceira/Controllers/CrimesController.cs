using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using terceira.Models;

namespace terceira.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrimesController : ControllerBase
    {
        private readonly SistemaDBContext _context;

        public CrimesController(SistemaDBContext context)
        {
            _context = context;
        }

        // GET: api/Crimes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Crime>>> GetCrimes()
        {
            //return await _context.Crimes.ToListAsync();
            return _context.Crimes
                .Include(c => c.Status)
                .Include(c => c.CreateUser)
                .Include(c => c.UpdateUser)
                .ToList();
        }

        // GET: api/Crimes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Crime>> GetCrime(int id)
        {
            //var crime = await _context.Crimes.FindAsync(id);
            var crime = _context.Crimes
                .Include(c => c.Status)
                .Include(c => c.CreateUser)
                .Include(c => c.UpdateUser)
                .Where(c => c.Id == id).FirstOrDefault();

            if (crime == null)
            {
                return NotFound();
            }

            return crime;
        }

        // PUT: api/Crimes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCrime(int id, Crime crime)
        {
            if (id != crime.Id)
            {
                return BadRequest();
            }

            _context.Entry(crime).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CrimeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Crimes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Crime>> PostCrime(Crime crime)
        {
            _context.Crimes.Add(crime);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCrime", new { id = crime.Id }, crime);
        }

        // DELETE: api/Crimes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCrime(int id)
        {
            var crime = await _context.Crimes.FindAsync(id);
            if (crime == null)
            {
                return NotFound();
            }

            _context.Crimes.Remove(crime);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CrimeExists(int id)
        {
            return _context.Crimes.Any(e => e.Id == id);
        }
    }
}
