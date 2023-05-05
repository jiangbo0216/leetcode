import unittest
from mine_sweeping import mineSweeping

class TestMineSweeping(unittest.TestCase):
    def test_mineSweeping(self):
        board = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
        self.assertEqual(mineSweeping(3,3, board), 1)
        board = [[1, 0, 1], [0, 1, 0], [1, 0, 1]]
        self.assertEqual(mineSweeping(3,3, board), 1)

if __name__ == '__main__':
    suite = unittest.TestLoader().loadTestsFromTestCase(TestMineSweeping)
    unittest.TextTestRunner(verbosity=2).run(suite)